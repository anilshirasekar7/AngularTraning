var para;
para = "typeScript is an open-source language which builds on JavaScript. one of the world\u2019s most used tools, by adding static type definitions. types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly. writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.\na Result You Can Trust. all valid JavaScript code is also TypeScript code. You might get type-checking errors, but that won't stop you from running the resulting JavaScript. While you can go for stricter behavior, that means you're still in control. typeScript code is transformed into JavaScript code via the TypeScript compiler or Babel. This JavaScript is clean, simple code which runs anywhere JavaScript runs: In a browser, on Node.JS or in your apps. Gradual Adoption. adopting TypeScript is not a binary choice, you can start by annotating existing JavaScript with JSDoc, then switch a few files to be checked by TypeScript and over time prepare your codebase to convert completely. typeScript\u2019s type inference means that you don\u2019t have to annotate your code until you want more safety.";
function titleCase(str) {
    return str.split('.').map(function (val) {
        var whiteSpace = "", position = 0;
        if (startsWithSpace(val)) {
            position = 1;
            whiteSpace = val.charAt(0);
        }
        return whiteSpace + val.charAt(position).toUpperCase() + val.substr(position + 1).toLowerCase();
    }).join('.');
}
var startsWithSpace = function (string) {
    return string.indexOf(string.trim()) != 0;
};
console.log("Original para");
console.log(para);
console.log("titleCase para");
console.log(titleCase(para));
console.log();
var words = para.split(" ");
console.log("number of words in the string are " + words.length + " .length}");
console.log("Words which contains 'a' character");
function displayWordsContainsA(n, idx) {
    if (n.toLowerCase().includes("a"))
        console.log(n);
}
words.forEach(displayWordsContainsA);
console.log();
var filteredWords = words.filter(function (val) { return val == "the"; });
//for(let val of filteredWords)
//console.log(val);
console.log("the word 'the' occurs " + filteredWords.length + " times");
