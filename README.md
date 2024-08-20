# Doc.Processor
Proyecto Personal donde se busca una web que permita a usuarios utilizar teconologias de inteligencia ariticial proporcionadas por azure. El fin es que los estudiantes, trabajadores que necesiten asistencia en documentos, videos, reconocimiento de imagenes, tengan una plataforma donde se unifiquen todos estas funcionalidades

Este proyecto utiliza React para el frontend y Express.js para el backend. A continuación se detallan las instrucciones para configurar y ejecutar ambos componentes del proyecto.

## Índice

- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Frontend (React)](#frontend-react)
  - [Backend (Express.js)](#backend-expressjs)
    
## Requisitos

- Node.js (v14 o superior recomendado)
- npm (v6 o superior) o Yarn

## Instalación y Configuración

### Frontend (React)

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/SCaneoGarrido/Doc.Processor.git

2. **Configuraricion de frontend**
    ```bash
    Accede a la carpeta:
    - cd Doc.Processor/FrontEnd

    Instala las dependencias
    - npm install  

3. **Ejecutcion del servidor FrontEnd**
    ```bash
    - npm start 

### Backend (Express.js)

4. **Configuracion de BackEnd**
    ```bash
    - cd Doc.Processor/BackEnd
    - npm install 
    - npm start

## Configuracion del archivo de config.js

1.- **Navegar a la carpeta de -class- dentro del directorio --src--**

2.- **Dentro de la carpeta --class-- cree un archivo con el nombre "config.js"**

3.- **Agregue el siguiente contenido al archivo:**
  ```bash
      module.exports = {
      SPEECH_KEY: process.env.SPEECH_KEY || 'tu_clave_de_suscripción', 
      SPEECH_REGION: process.env.SPEECH_REGION || 'tu_región_de_servicio', 
    }
  ```
4.- **Reemplaze las variables con las claves de su servicio de Speech de Azure**


