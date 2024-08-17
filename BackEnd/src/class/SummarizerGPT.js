// GptService.js

/**
 * QUEDA PENDIENTE ESTE SISTEMA.
 */
const axios = require('axios');
require('dotenv').config();


class GptService {
    constructor() {
        this.apiKey = process.env.AZURE_OPENAI_API_KEY;
        this.endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    }

    async summarizeDocument(document) {
        try {
            const response = await axios.post(`${this.endpoint}openai/deployments/gpt-35-turbo/chat/completions?api-version=2023-03-15-preview`, {
                messages: [
                    { role: "system", content: "Eres un asistente que resume documentos." },
                    { role: "user", content: document }
                ],
                max_tokens: 150
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': this.apiKey
                }
            });

            return response.data.choices[0].message.content;
        } catch (error) {
            throw new Error('Error al comunicarse con el modelo GPT: ' + error.message);
        }
    }
}
module.exports = GptService;