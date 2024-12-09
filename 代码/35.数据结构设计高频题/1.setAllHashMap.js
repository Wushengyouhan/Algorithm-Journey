const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 定义map
class SetAllHashMap {
  constructor() {
    this.map = new Map();
    this.setAllValue = 0;
    this.setAllTime = -1;
    this.cnt = 0;
  }

  put(k, v) {
    if (this.map.has(k)) {
      const value = this.map.get(k);
      value[0] = v;
      value[1] = this.cnt++;
    } else {
      this.map.set(k, [v, this.cnt++]);
    }
  }

  setAll(v) {
    this.setAllValue = v;
    this.setAllTime = this.cnt++;
  }

  get(k) {
    if (!this.map.has(k)) {
      return -1;
    }

    const value = this.map.get(k);

    if (value[1] > this.setAllTime) {
      return value[0];
    } else {
      return this.setAllValue;
    }
  }
}

// 创建实例
const instance = new SetAllHashMap();

// 读取数据
let n = null;
let curline = 0;
let data = [];
rl.on("line", function (line) {
  if (n === null) {
    n = parseInt(line);
  } else {
    data.push(line.trim());
    curline++;
  }

  if (curline === n) {
    rl.close();
  }
});

rl.on("close", () => {
  const results = [];
  for (let i = 0; i < n; i++) {
    const parts = data[i].split(" ").map(Number);
    const opt = parts[0];
    if (opt === 1) {
      const k = parts[1];
      const v = parts[2];
      instance.put(k, v);
    } else if (opt === 2) {
      const k = parts[1];
      results.push(instance.get(k));
    } else if (opt === 3) {
      const v = parts[1];
      instance.setAll(v);
    }
  }

  console.log(results.join("\n"));
});
