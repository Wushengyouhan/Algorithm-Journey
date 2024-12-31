const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MAXN = 150001;
const tree = Array(MAXN)
  .fill(null)
  .map(() => Array(26).fill(0));

const end = Array(MAXN).fill(0);
const pass = Array(MAXN).fill(0);

let cnt;

// 创建一棵树
function build() {
  cnt = 1;
}

function insert(word) {
  let cur = 1;
  pass[cur]++;
  for (let i = 0; i < word.length; i++) {
    const path = word.charCodeAt(i) - "a".charCodeAt(0);
    if (tree[cur][path] === 0) {
      cnt++;
      tree[cur][path] = cnt;
    }
    cur = tree[cur][path];
    pass[cur]++;
  }
  end[cur]++;
}

function search(word) {
  let cur = 1;
  for (let i = 0; i < word.length; i++) {
    const path = word.charCodeAt(i) - "a".charCodeAt(0);
    if (tree[cur][path] === 0) {
      return 0;
    }
    cur = tree[cur][path];
  }
  return end[cur];
}

function deleteWord(word) {
  if (search(word) > 0) {
    let cur = 1;
    pass[cur]--; // 减去根节点的单词数量
    for (let i = 0; i < word.length; i++) {
      const path = word.charCodeAt(i) - "a".charCodeAt(0);
      if (--pass[tree[cur][path]] === 0) {
        // 这里是先减1
        tree[cur][path] = 0;
        return;
      }
      cur = tree[cur][path];
    }
    end[cur]--;
  }
}

function prefixNumber(pre) {
  let cur = 1;
  for (let i = 0; i < pre.length; i++) {
    const path = pre.charCodeAt(i) - "a".charCodeAt(0);
    if (tree[cur][path] === 0) {
      return 0;
    }
    cur = tree[cur][path];
  }
  return pass[cur];
}

function clear() {
  for (let i = 0; i <= cnt; i++) {
    tree[i].fill(0);
    end[i] = 0;
    pass[i] = 0;
  }
}

// 输入输出
let n = null;
let data = [];
let curline = 0;

rl.on("line", (input) => {
  if (n === null) {
    n = parseInt(input);
  } else {
    data.push(input.trim());
    curline++;
  }

  if (curline === n) {
    rl.close();
  }
});

rl.on("close", () => {
  // 建立一个树
  build();
  const results = [];

  for (let i = 0; i < data.length; i++) {
    const [op, word] = data[i].split(" ");
    const operation = parseInt(op);

    switch (operation) {
      case 1:
        insert(word);
        break;
      case 2:
        deleteWord(word);
        break;
      case 3:
        results.push(search(word) > 0 ? "YES" : "NO");
        break;
      case 4:
        results.push(prefixNumber(word));
        break;
      default:
        console.error(`Invalid operation: ${operation}`);
        break;
    }
  }
  // 对静态数组进行清理
  clear();
  console.log(results.join("\n"));
});
