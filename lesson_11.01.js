function binaryToDecimal(num) {
    let sum = 0
    for(let i = 0; i < num.length; i++){
        if (num[i] == '1') {
            sum = sum = sum + Math.pow(2, num.length - i - 1)
        }
    }
    return sum
}
console.log(binaryToDecimal('1001110'));



function decimalToBinary(num){
    let index = 0
    while(Math.pow(2, index) <= num){
        index++
    }
    index--
    let array = []
    for (let i = index; i >= 0; i--) {
        if(num >= Math.pow(2, i)){
            num = num - Math.pow(2, i)
            array.push(1)
        } else{
            array.push(0)
        }
    }
    return array
}
console.log(decimalToBinary(27));


function decimalToBinary(num10) {
  index = 0;
  while (num10 >= Math.pow(2, index)) {
    index++;
  }
  index--;
  let num2array = [];
  numTemp = num10;
  while (numTemp > 0) {
    for (let i = index; i >= 0; i--) {
      if (Math.pow(2, i) <= numTemp) {
        num2array.push(1);
        numTemp = numTemp - Math.pow(2, i);
      } else num2array.push(0);
    }
  }
  return Number(num2array.join(""));
}

console.log(decimalToBinary(45));