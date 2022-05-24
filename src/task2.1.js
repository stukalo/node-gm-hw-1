import { open, writeFile } from 'fs/promises';
import path from 'path';
import csv from 'csvtojson';

const filePath = path.join(__dirname, '../csv', 'nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, '../output', 'task-2.1.json');

(async function main() {
  try {
    const file = await open(filePath);
    const fileContent = await file.readFile('utf8');
    const jsonObj = await csv().fromString(fileContent);
    await writeFile(outputPath, JSON.stringify(jsonObj));
  } catch (e) {
    console.error(e);
  }
})();

