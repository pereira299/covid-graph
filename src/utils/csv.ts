import fs from 'fs';
import csv from 'fast-csv';

export function parse(filename:string, objModel:Object){
    parseCsv(filename, objModel, () => {})
}

function parseCsv(filename:string, objModel:object, callback:Function){
    fs.createReadStream(filename)
    .pipe(csv.parse({ headers: true }))
    // pipe the parsed input into a csv formatter
    .pipe(csv.format({ headers: true }))
    // Using the transform function from the formatting stream
    .transform((row, next) => {
        console.log(row);
    })
    .pipe(process.stdout)
    .on('end', () => process.exit());
}
