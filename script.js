function getUniqueSymbol(text) {
    let words = [];
    let uniqueLetters = [];

    text = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    words = text.toLowerCase().split(' ');

    words.forEach((item) => {
        let uniq = '';
        for (let i = 0; i < item.length; i++) {
            if (uniq.includes(item[i])) {
                uniq = uniq.replace(item[i], '')
            } else if (!uniq.includes(item[i])) {
                uniq += item[i]
            }
        }
        uniqueLetters.push(uniq[0]);
    });

    let uniqueArray = uniqueLetters.filter((item, index) => {
        return uniqueLetters.indexOf(item) === index;
    });
    
    

    return uniqueArray[0];
}


let testText = `The Tao gave birth to machine language.
Machine language gave birth to the assembler.
The assembler gave birth to the compiler.
Now there are ten thousand languages.
Each language has its purpose, however humble.
Each language expresses the Yin and Yang of software. 
Each language has its place within the Tao.
But do not program in COBOL if you can avoid it.
-- Geoffrey James, "The Tao of Programming"`;

console.log(getUniqueSymbol(testText));



