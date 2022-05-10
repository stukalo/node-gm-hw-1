import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

const filePath = path.join(__dirname, '../csv', 'nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, '../output', 'task-2.1.json');

(async function main() {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const jsonObj = await csv().fromString(fileContent);

  fs.writeFileSync(outputPath, JSON.stringify(jsonObj), (err) => {
    if (err) {
      console.error(err);
    }
  });
})();

