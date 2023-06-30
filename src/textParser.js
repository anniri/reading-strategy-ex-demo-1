//Function uses Node's filesystem (fs) to retrieve text from given file.
//Text is divided by line breaks and markdown syntax is replaced with corresponding html tags.
//Text formatting may include 2 heading levels (h1 and h2) and paragraphs (p). Text decoration may be bold (b) and italic (i).

export function parseMarkdownToHtml(filepath) {
    const fs = require("fs");
    fs.readFile(filepath, "utf8", (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        //Store text into an array using line breaks as parameters for split.
        let textInLines = data.split(/\r?\n/);
        let parsedTextArr = textInLines.map((line) => {
            //Regex model found from a tutorial by Randolph Perkins https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558
            let lineinHTML = line.replace(/^##(.*$)/, "<h2>$1</h2>")
                            .replace(/^#(.*$)/, "<h1>$1</h1>")
                            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                            .replace(/\*(.*)\*/gim, '<i>$1</i>');
            
            //If nothing was replaced and line doesn't start with a html tag (<..>), wrap line in <p> tags.
            if(!/^\<..\>/.test(lineinHTML)) {
                lineinHTML = `<p>${lineinHTML}</p>`
            }
            //Line/paragraph of text is added to the array wrapped in matching html tags.
            return lineinHTML;
        })
        
        return parsedTextArr;
    })
}


