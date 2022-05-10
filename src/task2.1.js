const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const filePath = path.join(__dirname, '../csv', 'nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, '../output', 'task-2.1.json');

const fileContent = fs.readFileSync(filePath, 'utf8');

csv()
  .fromString(fileContent)
  .then((jsonObj) => {
    fs.writeFileSync(outputPath, JSON.stringify(jsonObj), (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
