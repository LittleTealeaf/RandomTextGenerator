
const words = [];
fetch('./assets/words.txt').then(response => response.text()).then(text => text.split('\n').forEach(word => words.push(word)));

function generate() {
    const paragraphs = parseInt(document.getElementById("paragraph_count").value);
    var out = "";
    for(var i = 0; i < paragraphs; i++) {
        out += createParagraph();
        if(i < paragraphs - 1) {
            out += "<br>";
        }
    }
    document.getElementById("output").innerHTML = out;
}

function createParagraph() {
    const sentence_count = Math.random() * 10 + 5;

    var paragraph = "";
    for(var i = 0; i < sentence_count; i++) {
        paragraph += createSentence();
    }
    return paragraph;
}

function createSentence() {
    const word_count = Math.random() * 20;
    var sentence = "";
    for(var j = 0; j < word_count; j++) {
        sentence += words[Math.round(Math.random() * words.length)];
        if(j < word_count - 1) {
            sentence += " ";
        }
    }
    sentence += ".";
    return sentence;
}