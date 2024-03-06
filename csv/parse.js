const csv = require('fast-csv');
const fs = require('fs');
const Art = require('./../models/art');

const csvFilePath = './csv/the-tate-collection.csv';

const transformFn = (data) => ({
  externalId: data.id,
  artist: data.artist,
  title: data.title,
  year: data.year ? data.year : null,
});

module.exports = () => {
  fs.createReadStream(csvFilePath)
    .pipe(csv.parse({ delimiter: ';', headers: true, skipRows: 1 }))
    .transform(transformFn)
    .on('error', (error) => console.error(error))
    .on('data', (row) => Art.create(row))
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));
};
