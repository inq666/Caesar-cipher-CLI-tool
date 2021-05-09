# Caesar cipher CLI tool

 CLI tool that encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).
 
# **Getting Started**
First of all, clone a project:
```bash
 git clone https://github.com/inq666/Caesar-cipher-CLI-tool.git
```

Open the project in any text editor with built-in CLI or in any installed CLI and install dependencies:
```bash
 npm install
```

To run the program use `node index.js` with the available options.

## Using
The program works exclusively with the English alphabet, all other characters will not be modified. Also, the program can decode and encode text with any shift, negative shifts are also available.
#### Available options
Below are the available options:
1. `-a` or `--action`, accepts one of the two available values (decode/encode).
2. `-s` or `--shift`, accepts any integer value to shift letters in the cipher.
3. `-i` or `--input`, accepts the path to the input file in the form .txt to read the cipher.
4. `-o` or `--output`, accepts the path to the output file in the form .txt to write the cipher.

1. `Action` and `Shift` are required parameters, without which the program will not start, if you skip these options, an error will be displayed in the CLI and the program will exit.
2. If input is missed, access will be provided to directly enter text into the CLI. To end the program use `CTRL + C`.
3. If output is missed, the modified text from the input will be displayed in the CLI.
4. If outpuit and input are missed, access will be provided to directly enter text into the CLI, which will be output to the CLI after modification.
5. If the file is not available or the path to the file is incorrect, you will see an error and the program will exit.