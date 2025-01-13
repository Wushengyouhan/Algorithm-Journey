const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let data = [];
let curLine = 0;

rl.on("line", (input) => {
  if (curLine === 0) {
    n = parseInt(input);
    curLine++;
  } else {
    data = input
      .split(" ")
      .map(Number)
      .map((number) => (number != 0 ? (number > 0 ? 1 : -1) : 0));
    rl.close();
    curLine = 0;
  }
});

rl.on("close", () => {
  let result = compute();
  console.log(result);
});

function compute() {
  const map = new Map();
  map.set(0, -1);
  let ans = 0;
  for (let i = 0, sum = 0; i < n; i++) {
    sum += data[i];
    // 0....i = sum
    // 找0..x = sum
    // x+1...i = 0
    if (map.has(sum)) {
      ans = Math.max(ans, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return ans;
}
