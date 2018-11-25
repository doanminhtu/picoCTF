// execute: node hex2dec.js "FF..F" -> output intvar fs = require('fs');
const hexStr = "0123456789ABCDEF";

module.exports ={
    decodeHex:function(input) {
        input=input.toUpperCase();
        var output=0;
        var i=0;    
        for (;i < input.length;i++){
            const a=input[i];
            const key = hexStr.indexOf(a);
            output = (output << 4) + key;
        }
        return output;
    }
}
