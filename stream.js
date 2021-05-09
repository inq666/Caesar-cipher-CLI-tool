const caesarCipher = require('./caesarCipher');
const { Transform, pipeline } = require('stream');


const encryption = (shift) => (
  new Transform({
    transform(chunk, encoding, callback) {
      const content = `${caesarCipher(chunk.toString(), shift)}\n`;
      this.push(content);
      callback();
    }
  }
  )
)

const createEncryptionStream = (input, output, shift) => (
  pipeline(
    input,
    encryption(shift),
    output,
    (err) => {
      if (err) throw err;
    }
  )
);

module.exports = createEncryptionStream;
