const hex2dec= require('./hex2dec')

const [_, __, mode, input] = process.argv


switch (mode) {
    case "2":
        console.log("Result: ", bin2str(input))
        break
    case "8":
        console.log("Result: ", base8tostr(input))
        break
    case "16":
        console.log("Result: ", hex2str(input))
        break
    default:    
        console.log("")
}

function bin2str (input) {
    var result=""
    var i=0
    for ( ; i < input.length ; ){
        var bin=0        
        for (j=0 ; j<8 ; j++) { //8 bit per word -> 8 chars of binary
            bin= (bin << 1) 
            if (input.charAt(i++)==1) bin += 1
        }
        result+=String.fromCharCode(bin)
        while ( input[i] == " " ) {
            i++
        }
    }
    return result
}

function hex2str (input){
    var result=""
    var i=0
    for ( ; i < input.length ; ) { //8 bit per word -> 2 chars of hex
        var hexa=""
        hexa += input[i++]
        hexa += input[i++]
        result += String.fromCharCode(hex2dec.decodeHex(hexa))
        while ( input[i] == " " ) {
            i++
        }
    }
    return result
}

function base8tostr(input){
    var result=""
    var i=0
    for ( ; i < input.length ; ){
        var template=0
        while ( input[i] != " " & i < input.length) {
            template = (template << 3) +  input.charCodeAt(i++) - 48
        }
        result += String.fromCharCode(template)
        while ( input[i] == " " ) {
            i++
        }
    }
    return result
}