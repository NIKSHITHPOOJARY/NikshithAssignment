const fs = require('fs');
const csv = require('csv-parser');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error('Please provide input and output file paths.');
    process.exit(1);
}

const results = [];

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        fs.writeFile(outputFile, JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error('Error writing output file:', err);
                process.exit(1);
            }
            console.log('File has been written to', outputFile);
        });
    })
    .on('error', (err) => {
        console.error('Error reading the input file:', err);
        process.exit(1);
    });
