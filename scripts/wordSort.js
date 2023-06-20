"use strict";
exports.__esModule = true;
var fs = require("fs");
/**
 * Sorts the words in a text file in alphabetical order.
 * Converts all words to lowercase.
 * @param filePath - The path to the text file.
 */
function sortWordsInFile(filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var words = fileContent.toLowerCase().split('\n').filter(Boolean);
    var sortedWords = words.sort();
    var sortedContent = sortedWords.join('\n');
    fs.writeFileSync(filePath, sortedContent);
}
// Usage Example
var filePath = './library/project-words.txt';
sortWordsInFile(filePath);
console.log('File successfully sorted! 😉 \n All words are in lowercase.🤏🏿');
