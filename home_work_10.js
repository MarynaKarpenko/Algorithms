const getCoins = (sum, coins) => {
  const result = [];
  let remainingSum = sum;

  coins.sort((a, b) => b - a);

  for (const coin of coins) {
    const count = Math.floor(remainingSum / coin);

    if (count > 0) {
      result.push({ coin, count });
      remainingSum -= count * coin;
    }

    if (remainingSum === 0) {
      break;
    }
  }

  if (remainingSum > 0) {
    return 'Impossible to get exact change.';
  }

  return result;
};

const main = () => {
  const penny = [1, 3, 4, 2];
  const amount = 5;
  const res = getCoins(amount, penny);
  console.log(res);
};

main();