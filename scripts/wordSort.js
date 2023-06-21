"use strict";
exports.__esModule = true;
var fs = require("fs");
/**
 * Sorts the words in a text file in alphabetical order.
 * Converts all words to lowercase.
 * @param filePath - The path to the text file.
 */
function sortWordsInFile(filePath) {
    try {
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        var words = fileContent.toLowerCase().split('\n').filter(Boolean);
        var sortedWords = words.sort();
        var sortedContent = sortedWords.join('\n');
        fs.writeFileSync(filePath, sortedContent);
        console.log('File successfully sorted! 😉\nAll words are in lowercase.🤏🏿');
    }
    catch (error) {
        console.error('An error occurred while sorting the file:', error.message);
    }
}
// Usage Example
var filePath = process.argv[2] || './library/project-words.txt';
sortWordsInFile(filePath);
