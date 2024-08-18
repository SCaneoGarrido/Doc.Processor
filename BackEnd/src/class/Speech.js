const config = require('./config'); // archivo de configuración
const FileManager = require('../util/FileManager');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const path = require('path');
const fs = require('fs');

class Speech {
    constructor() {
        this.OutputPath = 'speech_outputs';
        if (!fs.existsSync(this.OutputPath)) {
            fs.mkdirSync(this.OutputPath); // Crea el directorio si no existe
        }
        this.speechConfig = sdk.SpeechConfig.fromSubscription(config.SPEECH_KEY, config.SPEECH_REGION);
    }

    async processFile(filePath) {
        try {
            const fileManager = new FileManager(filePath);
            const parts = await fileManager.readFile(); // Lee y divide el archivo en partes

            for (let i = 0; i < parts.length; i++) {
                const audioFileName = `audio_${Date.now()}_${i}.wav`;
                const audioFilePath = path.join(this.OutputPath, audioFileName);
                const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFilePath);
                const synthesizer = new sdk.SpeechSynthesizer(this.speechConfig, audioConfig);

                console.log(`Sintetizando parte ${i + 1}: ${audioFileName}`);
                
                await this.synthesizeText(parts[i], synthesizer);
            }
        } catch (error) {
            console.error("Error procesando el archivo:", error);
        }
    }

    synthesizeText(text, synthesizer) {
        return new Promise((resolve, reject) => {
            synthesizer.speakTextAsync(
                text,
                result => {
                    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                        console.log('Texto sintetizado correctamente.');
                        resolve();
                    } else {
                        console.error("Error en la síntesis:", result.errorDetails);
                        reject(result.errorDetails);
                    }
                    synthesizer.close();
                },
                err => {
                    console.error("Error durante la síntesis de voz:", err);
                    synthesizer.close();
                    reject(err);
                }
            );
        });
    }
}

module.exports = Speech;
