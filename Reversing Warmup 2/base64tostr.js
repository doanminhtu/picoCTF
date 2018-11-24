// execute example: node base64toASCII.js "dGg0" 
const [first, second, input] = process.argv;

const base64Str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

console.log("Result: ", decodeB64(input));

function decodeB64 (input) {
    if (input.length % 4 != 0) {
        return "";
    }
    var result = "";
    var i=0;

    //check input valid or not
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
         console.log("Invalid Input: some characters are not from A-Z, a-z, 0-9, +, / or =")
         return "";
    }

    for (;i < input.length;) {
        var char1, char2,char3,char4="";
        var code1,code2,code3="";

        //get 4 char from input
        char1 = base64Str.indexOf(input[i++]);
        char2 = base64Str.indexOf(input[i++]);
        char3 = base64Str.indexOf(input[i++]);
        char4 = base64Str.indexOf(input[i++]);

        //parse 4 char into 3 ascii code
        code1 = char1 << 2 | char2 >> 4;
        code2 = ((char2 & 15) << 4) | char3 >> 2;
        code3 = ((char3 & 3) << 6) | char4;

        result= result + String.fromCharCode(code1) +  String.fromCharCode(code2) + String.fromCharCode(code3);
    }
    return result;
}