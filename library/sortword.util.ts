import * as fs from 'fs';

/**
 * Sorts the words in a text file in alphabetical order.
 * @param filePath - The path to the text file.
 */
function sortWordsInFile(filePath: string): void {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const words = fileContent.split('\n').filter(Boolean);
  const sortedWords = words.sort();
  const sortedContent = sortedWords.join('\n');
  fs.writeFileSync(filePath, sortedContent);
}

// Usage Example
const filePath = 'project-words.txt';
sortWordsInFile(filePath);

console.log('File successfully sorted!');
