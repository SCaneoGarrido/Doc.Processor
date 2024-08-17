// importaciones de la clase
const config = require('./config'); // archivo de configuracion
var sdk = require('microsoft-cognitiveservices-speech-sdk');
var readline = require('readline');

class Speech {
    constructor () {
        this.audioFile = 'YourAudioFile.wav';
        this.speechConfig = sdk.SpeechConfig.fromSubscription(config.SPEECH_KEY, config.SPEECH_REGION);
        this.audioConfig = sdk.AudioConfig.fromAudioFileOutput(this.audioFile);
        this.synthesizer = new sdk.SpeechSynthesizer(this.speechConfig, this.audioConfig);
    }
    
    
    test(text) {
        this.synthesizer.speakTextAsync(text, 
            function (result) {
                if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                    console.log('Texto sintetizado');
                } else {
                    console.error("Speech cancelado, "+result.errorDetails);
                }
                
            },
            this.synthesizer.close(),
            this.synthesizer = null,
        
            function (err) {
                console.trace("err - " + err);
                this.synthesizer.close();
                this.synthesizer = null;
            });
            console.log(`Sintetizando ${this.audioFile}`);
    }
};

module.exports = Speech;