import path from 'path';
import { pipeline, Transform } from 'stream';
import fs from 'fs';
import csv from 'csvtojson';

const filePath = path.join(__dirname, '../csv', 'nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, '../output', 'task-2.2.json');

const transform = new Transform( { objectMode: true } );
transform._lineNumber = 0;

transform._transform = function (chunk, encoding, done) {
    const res = chunk.toString().trim();
    this.push(this._lineNumber++ === 0 ? `[${res}` : `,${res}`);
    done();
}
transform._flush = function (done) {
  this.push(']');
  done();
}


pipeline(
  csv().fromStream(fs.createReadStream(filePath)),
  transform,
  fs.createWriteStream(outputPath),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
