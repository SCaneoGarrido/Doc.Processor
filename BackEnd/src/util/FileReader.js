const fs = require('fs');
const pdf = require('pdf-parse');
const aceptedExt = ['.pdf', '.docx', '.txt'];

// clase encargada de manejar la lectura de archivos
class FileManager {
    constructor(pathFile) {
        this.pathFile = pathFile;
    }
    
    getFileExtension(filename) {
        try{
            let ext = filename.split('.').pop(); 
            let flag = aceptedExt.includes(ext);
            if (!ext) {
                console.log('Ocurrio un error no se extrajo la extension ')
                return false
            };

            if (flag) {
                console.log('Extension de archivo permitida');
                return true
            };
            
        } catch(error) {
            console.error(`Ocurrio un erro al obtenes la extension del archivo. ${error}`);
            return false;
        }
    }


    readPdfFile() {
        let dataBuffer = fs.readFileSync(this.pathFile);

        pdf(dataBuffer).then(function(data) {
            console.log(data.numpages);

            console.log(data.numrender);

            console.log(data.info);

            console.log(data.metadata);

            console.log(data.version)

            console.log(data.text);
        })
    }

}

module.exports = FileManager;