function is1(num) {
  for (let start = 1; start <= num; start++) {
    let sum = start;
    for (let j = start + 1; j <= num; j++) {
      if (sum + j === num) {
        return true;
      }
      sum += j;
    }
  }
  return false;
}

function main() {
  for (let i = 1; i < 200; i++) {
    console.log(i + ": " + is1(i));
  }
}

// 总结规律: 2的幂都不可以
function is2(num) {
  return (num & (num - 1)) !== 0;
}

main();
