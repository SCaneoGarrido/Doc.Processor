const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multerStorage = require('./middleware/multerConfig');
const SpeechService = require('./class/Speech');
const app = express();
const PORT = process.env.PORT || 5000;



global.filePath = ''; // esta es una variable global para obtener la ruta del archivo cargado

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
require('dotenv').config();



app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(`Los datos para manejar el login son: ${email} - ${password}`);

    // Aquí puedes agregar la lógica para autenticar al usuario

    res.status(201).json({ message: "Datos recibidos" });
});


app.post('/syntehize', multerStorage.single('file'), async (req, res) => {
    try {
        let document = req.body;

        if (!document) {
            console.log('No File Uploaded');
            return res.status(400).json({message:'No file Uploaded'});
        }

        global.filePath = req.file.path;

        const speech = new SpeechService();

        await speech.processFile(global.filePath);

        return res.status(201).json({message:'Archivo procesado exitosamente ;D'});


    } catch(error) {
        console.error(`Error al momento de sintetizar el texto a audio: ${error}`);
        return res.status(500).json({message:'Error interno del servidor'});
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
