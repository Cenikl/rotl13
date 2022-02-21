const prompt = require("prompt-sync")();

const input = "ABCDEFGHIJKLMabcdefghijklm"
const input2 = "NOPQRSTUVWXYZnopqrstuvwxyz"
let word = prompt("A word or sentence : ")

function encryption(word,part1,part2){
    let answer = "";
    for(let i = 0; i< word.length;i++){
        for(let d = 0; d<part1.length; d++){
            if(word[i] == part1[d])
                answer = answer.concat(part2[d])
                
            if( word[i] == part2[d])
                answer = answer.concat(part1[d])

            else
                {}//do nothing
        }
    }
console.log("The result is : "+answer)
}
encryption(word,input,input2)