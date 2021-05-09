const caesarCipher = (string, shift) => {
  const chars = string.split('');
  return chars.map((char) => {
    if (/[a-z]/i.test(char)) {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code + 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code + 33 + shift) % 26) + 97);
      }
    }
    return char;
  }).join('');
}

module.exports = caesarCipher;
