const { createReadStream, createWriteStream } = require("fs");
const path = require('path');
const createEncryptionStream = require('./stream');
const { program } = require('commander');

program.version('0.0.1');
program
  .option('-a, --action <encode/decode>', 'accepts one of the two available values (decode/encode)')
  .option('-s, --shift <num>', 'accepts any integer value to shift letters in the cipher')
  .option('-i, --input <path to input file>', 'accepts the path to the input file in the form .txt to read the cipher',)
  .option('-o, --output <path to output file>', 'accepts the path to the output file in the form .txt to write the cipher',);

program.parse(process.argv);
const { shift, action, output, input } = program.opts();
if (action !== 'encode' && action !== 'decode' && !Number.isInteger(Number(shift))) {
  process.stderr.write("Missing or invalid value entered. Shift and Action are the required arguments. Shift only accepts integer values. Action only accepts one of the two available values (decode/encode)");
  process.exit(1);
}
if (!Number.isInteger(Number(shift))) {
  process.stderr.write("Missing or invalid value entered. Shift is the required argument which only accepts integer values");
  process.exit(1);
}
if ((action !== 'encode' && action !== 'decode')) {
  process.stderr.write("Missing or invalid value entered. Action is the required argument which only accepts one of the two available values (decode/encode)");
  process.exit(1);
}

let inputStream;
let outputStream;

if (!output && !input) {
  inputStream = process.stdin;
  outputStream = process.stdout;
} else if (!output) {
  inputStream = createReadStream(input);
  outputStream = process.stdout;
} else if (!input) {
  inputStream = process.stdin;
  outputStream = createWriteStream(output, { flags: 'a' });
} else {
  inputStream = createReadStream(input);
  outputStream = createWriteStream(output, { flags: 'a' });
}
inputStream.on('error', () => {
  process.stderr.write(`File ${input} does not exist or cannot be accessed. Please check the file path or accessibility.`)
  process.exit(1);
});
outputStream.on('error', () => {
  process.stderr.write(`File ${output} does not exist or cannot be accessed. Please check the file path or accessibility.`)
  process.exit(1);
});

createEncryptionStream(
  inputStream,
  outputStream,
  action === 'encode' ? Number(shift) : Number(-shift),
);
