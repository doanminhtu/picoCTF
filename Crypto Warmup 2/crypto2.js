/* 
    execute: node crypto2.js <text>
*/

const [_, __, input] = process.argv
const rot1 = "ABCDEFGHIJKLM";
const rot2 = "NOPQRSTUVWXYZ";

console.log("Result: ", rot13trans(input))

function rot13trans (input) {
    var result = ""
    for (let i=0; i < input.length; i++) {
        var tmp=input.charCodeAt(i);
        if ((tmp >= 65 & tmp <= 77) | (tmp >=97 & tmp <= 109)) {
            result = result + String.fromCharCode(tmp + 13)
        }
        else if ((tmp >= 78 & tmp <= 90) | (tmp >= 110 & tmp <= 122)) {
            result = result + String.fromCharCode(tmp - 13)
        }
        else 
            result+= input[i]
    }
    return result;
}

