# Sistema de Registro de Tareas Colaborativas en Tiempo Real

Esta es una aplicación web moderna diseñada para la gestión de tareas colaborativas en tiempo real. El proyecto fue desarrollado como parte de la práctica de la materia **Tecnologías Emergentes**, aplicando conceptos de **Cloud Computing**, integración de servicios en la nube, control de versiones y despliegue automatizado.

La aplicación permite registrar tareas, asignar responsables, marcar actividades como completadas y eliminarlas. Además, los cambios se actualizan en tiempo real gracias a la integración con **Supabase Realtime**.

---

##  Enlace del Proyecto en Producción

Puedes interactuar con la aplicación web en línea a través del siguiente enlace:

 **[https://tareas-cloud.vercel.app]** 


##  Arquitectura Cloud Implementada

El sistema utiliza una arquitectura alojada en la nube, estructurada en tres capas principales:

### 1. Capa de Control de Versiones y Despliegue: Git/GitHub

Git y GitHub permiten gestionar el código fuente del proyecto, registrar cambios mediante commits y trabajar de forma colaborativa. GitHub también funciona como repositorio remoto conectado con Vercel para activar el despliegue automático.

### 2. Capa de Backend y Datos: Supabase

Supabase funciona como backend en la nube. Proporciona una base de datos PostgreSQL para almacenar las tareas y permite la sincronización en tiempo real mediante WebSockets.

### 3. Capa de Frontend e Infraestructura: Vercel

Vercel permite publicar la aplicación en internet de manera rápida y segura. Cada vez que se suben cambios a GitHub, Vercel puede actualizar automáticamente la versión publicada de la aplicación.

---

## Tecnologías Usadas

El proyecto fue desarrollado utilizando herramientas gratuitas y orientadas al desarrollo web moderno:

* **Frontend:** HTML5, CSS3 y JavaScript.
* **Backend as a Service:** Supabase. (PostgreSQL Database + Realtime Engine).
* **Base de Datos:** PostgreSQL.
* **Tiempo Real:** Supabase Realtime.
* **Hosting y Despliegue:** Vercel.
* **Control de Versiones:** Git y GitHub.
* **Editor de Código:** Visual Studio Code.
* **Entorno de Desarrollo:** Node.js.

---

##  Evidencia e Interfaz del Sistema

A continuación, se presentan las capturas de pantalla que evidencian la configuración y funcionamiento del sistema.

### 1. Repositorio Remoto en GitHub

Aquí se muestra de la base del código fuente sincronizada y lista para el trabajo colaborativo en la nube.

<img width="1191" height="562" alt="Captura de pantalla 2026-06-13 190823" src="https://github.com/user-attachments/assets/44b4052e-0751-48c8-a14d-940cddb1bd28" />


### 2. Panel de Control y Base de Datos en Supabase

Aquí se muestra la tabla de tareas creada en Supabase, donde se almacenan los registros de la aplicación.


<img width="1918" height="350" alt="Captura de pantalla 2026-06-13 192320" src="https://github.com/user-attachments/assets/56e9a3f1-0b2f-4818-9690-f1c67a533bcf" />


### 3. Pipeline de Despliegue en Vercel

Evidencia del proceso de automatización continua (CI/CD) enlazado directamente con la rama principal de GitHub.


<img width="1176" height="631" alt="Captura de pantalla 2026-06-13 195654" src="https://github.com/user-attachments/assets/cbc17ca2-de5f-48f9-bb61-c3bb99cdba54" />


### 4. Aplicación en Funcionamiento

Aquí se muestra la aplicación web funcionando en el navegador, con el formulario de tareas y la lista de actividades registradas.
Interfaz gráfica final con el registro síncrono de tareas colaborativas en ejecución.

<img width="1917" height="960" alt="Captura de pantalla 2026-06-13 194729" src="https://github.com/user-attachments/assets/a9f9a0c6-2f88-4d21-b0a8-17184dbe1190" />

##  Instalación y Configuración Local

Para clonar y ejecutar este proyecto en una computadora local, se deben seguir los siguientes pasos:

### 1. Clonar el repositorio

git clone https://github.com/CristhianAnderson/tareas-cloud.git


### 2. Entrar a la carpeta del proyecto

cd tareas-cloud

### 3. Configurar las credenciales de Supabase

Abrir el archivo `app.js` y reemplazar las credenciales por las del proyecto de Supabase:

```javascript
const SUPABASE_URL = "TU_PROJECT_URL_AQUI";
const SUPABASE_ANON_KEY = "TU_ANON_PUBLIC_KEY_AQUI";
```

### 4. Ejecutar el proyecto

Abrir el archivo `index.html` usando la extensión **Live Server** de Visual Studio Code para iniciar el entorno de pruebas local.

---

## Integrantes del Equipo

* **Administrador de Infraestructura:** Cristhian Anderson Roca Saucedo
* **Desarrollador Frontend:** Meloddy Ortiz Roca
* **Encargado de Documentación:** Yerko Alex Suárez Banegas

---

## ✅ Conclusión

El desarrollo de esta aplicación permitió comprender de manera práctica cómo se integran herramientas modernas de Cloud Computing. Gracias a Supabase, GitHub y Vercel, fue posible crear una aplicación funcional, conectada a una base de datos en la nube, con actualización en tiempo real y publicada en internet mediante un flujo de despliegue automatizado.

