
var gapArray = [];
var count = 0;

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var inputNumber = dec2bin(N);
    
    for(i=0;i<inputNumber.length;i++){

        if(inputNumber[i] == 0){
            count += 1;
        }
        if(inputNumber[i] != 0){
            gapArray.push(count);
            count = 0;
        }
    }
  console.log(gapArray);
    var largest = Math.max.apply(null, gapArray);
    return largest;

    
}


