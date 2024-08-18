const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');
const aceptedExt = ['.pdf', '.docx', '.txt'];

class FileManager {
    constructor(pathFile, maxLength = 5000) {
        this.pathFile = pathFile;
        this.maxLength = maxLength;
    }

    async readFile() {
        const ext = path.extname(this.pathFile).toLowerCase();

        if (!aceptedExt.includes(ext)) {
            throw new Error('Unsupported file type');
        }

        let textContent = '';

        switch (ext) {
            case '.pdf':
                textContent = await this._readPDF();
                break;
            case '.docx':
                textContent = await this._readDOCX();
                break;
            case '.txt':
                textContent = await this._readTXT();
                break;
        }

        return this._splitText(textContent);
    }

    async _readPDF() {
        const dataBuffer = fs.readFileSync(this.pathFile);
        const data = await pdf(dataBuffer);
        return data.text;
    }

    async _readDOCX() {
        const result = await mammoth.extractRawText({ path: this.pathFile });
        return result.value;
    }

    async _readTXT() {
        return fs.readFileSync(this.pathFile, 'utf-8');
    }

    _splitText(text) {
        const parts = [];
        let startIndex = 0;

        while (startIndex < text.length) {
            const endIndex = Math.min(startIndex + this.maxLength, text.length);
            parts.push(text.slice(startIndex, endIndex));
            startIndex = endIndex;
        }

        return parts;
    }
}

module.exports = FileManager;
