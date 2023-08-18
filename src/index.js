const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''
    let firstSlice = 0;
    MORSE_TABLE['**********'] = ' '
    for (let i = 10; i <= expr.length; i += 10) {
        let binarSlice = expr.slice(firstSlice, i);
        firstSlice = i;
        binarSlice = binarSlice.replaceAll('10', '.')
        binarSlice = binarSlice.replaceAll('11', '-')
        binarSlice = binarSlice.replaceAll('0', '');
        for (let key in MORSE_TABLE) {
            if (key === binarSlice){
                result += MORSE_TABLE[key]
            }
        }
    }
    return result;
}

 module.exports = {
     decode
}
