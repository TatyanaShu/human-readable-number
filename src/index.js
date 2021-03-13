const { xit } = require("mocha");
function num(x){
    switch(x) {
        case 0: return "zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return"nine";
        case 10: return "ten";
        case 11: return"eleven";
        case 12: return"twelve";
        case 13: return"thirteen";
        case 14: return"fourteen";
        case 15:return "fifteen";
        case 16: return"sixteen";
        case 17: return"seventeen";
        case 18: return"eighteen";
        case 19: return"nineteen";
        case 20: return"twenty";
        case 30:return "thirty";
        case 40: return"forty";
        case 50: return"fifty";
        case 60: return"sixty";
        case 70: return"seventy";
        case 80: return"eighty";
        case 90: return"ninety";
    } 
}
function numb(number){
    if (number<=20||number===30||number===40||number===50||number===60||number===70||number===80||number===90) {
        x=number;
        return num(x);
    } else if (number>20&&number<100){
        x=number%10;
        y=number-x;
        return num(y) +' '+num(x);
    } }
module.exports = function toReadable (number) {

    if (number<100){
       return  numb(number)
    }
    else if(number>=100){
        z=Math.floor(number/100);
        k=number-z*100;
        if (k>0){
        return num(z) + " hundred "+ numb(k)}
        else {
            return num(z) + " hundred"
        }
    }
// if (number>=1000){
//     x=Math.floor(number/1000);
//     return x+" thousand"
// }  else if (number) 
  
}
