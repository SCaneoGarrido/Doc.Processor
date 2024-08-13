const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(`Los datos para manejar el login son: ${email} - ${password}`);

    // Aquí puedes agregar la lógica para autenticar al usuario

    res.status(201).json({ message: "Datos recibidos" });
});


app.get('/test', async(req, res) => {
    res.status(200).json({message:'Saludos desde express.js'});
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
