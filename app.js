// CONFIGURACIÓN DE CREDENCIALES
const SUPABASE_URL = 'https://hakqczljctxbikzqftsy.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhha3FjemxqY3R4YmlrenFmdHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyOTMyODMsImV4cCI6MjA5Njg2OTI4M30.-abbOT-kjuhL7vyCSfPi4MKJbBb0p62zl3elgBWi0ho';

// Inicialización del cliente de Supabase
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Función para consultar las tareas en la base de datos cloud
async function cargarTareas() {
    const { data, error } = await db.from('tareas').select('*').order('created_at', { ascending: true });
    if (error) {
        console.error('Error al descargar datos:', error);
        return;
    }
    renderTareas(data);
}

// SUSCRIPCIÓN EN TIEMPO REAL: Escucha cualquier cambio en la tabla y recarga automáticamente
db.channel('cambios-en-tareas')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'tareas' }, () => {
        console.log('Cambio detectado en la nube! Sincronizando interfaz...');
        cargarTareas();
    })
    .subscribe();

// Función para insertar una nueva tarea en la nube
async function agregarTarea() {
    const tituloInput = document.getElementById('titulo');
    const responsableInput = document.getElementById('responsable');
    
    const titulo = tituloInput.value.trim();
    const responsable = responsableInput.value.trim();
    
    if (!titulo || !responsable) {
        alert('Por favor, rellene ambos campos antes de enviar.');
        return;
    }
    
    const { error } = await db.from('tareas').insert({ titulo, responsable });
    if (error) {
        alert('Error al guardar en la nube.');
        console.error(error);
    } else {
        tituloInput.value = "";
        responsableInput.value = "";
    }
}

// Función para cambiar el estado de Completada/Pendiente
async function toggleEstado(id, estadoActual) {
    await db.from('tareas').update({ completada: !estadoActual }).eq('id', id);
}

// Función para borrar registros
async function eliminarTarea(id) {
    if (confirm('¿Estás seguro de eliminar esta tarea de la base de datos cloud?')) {
        await db.from('tareas').delete().eq('id', id);
    }
}

// Función encargada de dibujar los elementos HTML en la pantalla
function renderTareas(tareas) {
    const container = document.getElementById('tareas-container');
    document.getElementById('contador').textContent = `(${tareas.length})`;
    
    if (tareas.length === 0) {
        container.innerHTML = '<p class="vacio">No hay tareas pendientes en el servidor.</p>';
        return;
    }
    
    container.innerHTML = tareas.map(t => `
        <div class="tarea ${t.completada ? 'completada' : ''}">
            <div class="tarea-info">
                <strong>${t.titulo}</strong>
                <span>Asignado a: ${t.responsable}</span>
            </div>
            <div class="tarea-acciones">
                <button class="btn-check" onclick="toggleEstado('${t.id}', ${t.completada})">
                    ${t.completada ? 'Reabrir' : 'Completar'}
                </button>
                <button class="btn-eliminar" onclick="eliminarTarea('${t.id}')">Eliminar</button>
            </div>
        </div>
    `).join('');
}

// Carga inicial al abrir la aplicación
cargarTareas();