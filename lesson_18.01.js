function binaryToDecimal(num16) {
  let num10 = 0;
  for (let i = 0; i < num16.length; i++) {
    if (num16[i] == "A") {
      num10 += 10 * Math.pow(16, num16.length - 1 - i);
    } else if (num16[i] == "B") {
      num10 += 11 * Math.pow(16, num16.length - 1 - i);
    } else if (num16[i] == "C") {
      num10 += 12 * Math.pow(16, num16.length - 1 - i);
    } else if (num16[i] == "D") {
      num10 += 13 * Math.pow(16, num16.length - 1 - i);
    } else if (num16[i] == "E") {
      num10 += 14 * Math.pow(16, num16.length - 1 - i);
    } else if (num16[i] == "F") {
      num10 += 15 * Math.pow(16, num16.length - 1 - i);
    } else num10 += num16[i] * Math.pow(16, num16.length - 1 - i);
  }
  return num10;
}

console.log(binaryToDecimal("10"));


function decimalToExidecimal(num10) {
  index = 0;
  while (num10 >= Math.pow(16, index)) {
    index++;
  }
  index--;
  let num2array = [];
  numTemp = num10;
  while (numTemp > 0) {
    for (let i = index; i >= 0; i--) {
      if (Math.pow(16, i) <= numTemp) {
        let count = 1;
        while (numTemp >= Math.pow(16, i) * count) {
          count++;
        }
        count--;
        if (count > 0 && count < 10) num2array.push(count);
        else if (count == 10) num2array.push("A");
        else if (count == 11) num2array.push("B");
        else if (count == 12) num2array.push("C");
        else if (count == 13) num2array.push("D");
        else if (count == 14) num2array.push("E");
        else if (count == 15) num2array.push("F");
        numTemp = numTemp - Math.pow(16, i) * count;
      } else num2array.push(0);
    }
  }
  return num2array.join("");
}

console.log(decimalToExidecima(256));