const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multerStorage = require('./middleware/multerConfig');
const SpeechService = require('./class/Speech');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
require('dotenv').config();


// ------------------- POST METHODS ------------------- //
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(`Los datos para manejar el login son: ${email} - ${password}`);

    // agregar logica de login :,D
    // pd: No te mates 

    res.status(201).json({ message: "Datos recibidos" });
});


app.post('/syntehize', multerStorage.single('file'), async (req, res) => {
    try {
        let document = req.body;

        if (!document) {
            console.log('No File Uploaded');
            return res.status(400).json({message:'No file Uploaded'});
        }

        filePath = req.file?.path;

        const speech = new SpeechService();

        result = await speech.processFile(filePath);

        if (!result) {
            console.log('Ocurrio un error al momento de procesadr el texto');
            return res.status(501).json({message: 'error interno del servidor'})    
        }
        
        console.log(result);
        return res.status(201).json({message:'Archivo procesado exitosamente ;D'});
        


    } catch(error) {
        console.error(`Error al momento de sintetizar el texto a audio: ${error}`);
        return res.status(500).json({message:'Error interno del servidor'});
    }
});


// ------------------- GET METHODS ------------------- //
app.get('/testvoices', async (req, res) => {
    try {
        const speech = new SpeechService();
        const result = await speech.getvoices(); // hacemos un await a la funcion async

        if (result) {
            return res.status(200).json({message:'Voces obtenidads con exito'});
        } else {
            console.log(`Ha ocurrido un error durante la obtencion de las voces\n contenido de la variable -> ${result}`)
        }

    } catch(error) {
        console.log(`Error en la peticion -> ${error}`);
        return res.status(500).json({message: 'Error interno del servidor'});
    }
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
