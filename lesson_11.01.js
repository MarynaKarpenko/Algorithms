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