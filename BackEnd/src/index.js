const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multerStorage = require('./middleware/multerConfig');
const FileManager = require('./util/FileReader');
const GptService = require('./class/SummarizerGPT');
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

// este endpoint es solo para  la carga del archivo
app.post('/summarize', multerStorage.single('file'), async (req, res) => {
    // Instancia de GptService
    const gptService = new GptService();
    const document = req.body;
    if (!document) {
        return res.status(400).send('No File Uploaded');
    }
    //global.filePath = req.file.path;

    try {
        const summary = await gptService.summarizeDocument(document);
        if(summary != '') {
            res.status(200).json({ summary })
        } else {
            console.log('Hubo un error al realizar el resumen');
            res.status(500).json({error: 'No se ha conseguido realizar la peticion'});
        }

    } catch (error) {
        console.error(error);

    }
})

app.post('/test', async (req, res) => {
    const { text } = req.body;
    const Speech_instance = new SpeechService();
    console.log(`Texto de entrada: ${text}`);
    try {
        Speech_instance.test(text);
        return res.status(200).json({ msg: 'Texto procesado' });
    } catch (error) {
        console.error(`Error en el testeo. Error -> ${error}`);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
