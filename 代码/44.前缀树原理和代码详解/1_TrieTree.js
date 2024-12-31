const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class TrieNode {
  constructor() {
    this.pass = 0;
    this.end = 0;
    this.nexts = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 插入单词
  insert(word) {
    let node = this.root;
    node.pass++;
    // 遍历单词的字母
    for (let i = 0; i < word.length; i++) {
      // 0 代表 a的路径...25 代表 z的路径
      const path = word.charCodeAt(i) - "a".charCodeAt(0);
      if (node.nexts[path] === null) {
        node.nexts[path] = new TrieNode();
      }
      node = node.nexts[path];
      node.pass++;
    }
    node.end++;
  }

  // 查询单词完整出现的次数
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const path = word.charCodeAt(i) - "a".charCodeAt(0);
      if (node.nexts[path] === null) {
        return 0;
      }
      node = node.nexts[path];
    }
    return node.end;
  }

  // 如果之前word插入过前缀树，那么此时删掉一次
  // 如果之前word没有插入过前缀树，那么什么也不做
  delete(word) {
    if (this.search(word) > 0) {
      let node = this.root;
      // 根节点pass-1
      node.pass--;
      for (let i = 0; i < word.length; i++) {
        const path = word.charCodeAt(i) - "a".charCodeAt(0);
        if (--node.nexts[path].pass === 0) {
          // 这里是下个节点先减一，在判断，如果等于0的话，说明后面一整条路都没了
          node.nexts[path] = null;
          return;
        }
        node = node.nexts[path];
      }
      // 最后要把end减1
      node.end--;
    }
  }

  // 查询前缀树里，有多少单词以pre做前缀
  prefixNumber(pre) {
    let node = this.root;
    for (let i = 0; i < pre.length; i++) {
      const path = pre.charCodeAt(i) - "a".charCodeAt(0);
      if (node.nexts[path] === null) {
        return 0;
      }
      node = node.nexts[path];
    }
    return node.pass;
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
  const trie = new Trie();
  const results = [];

  for (let i = 0; i < data.length; i++) {
    const [op, word] = data[i].split(" ");
    const operation = parseInt(op);

    switch (operation) {
      case 1:
        trie.insert(word);
        break;
      case 2:
        trie.delete(word);
        break;
      case 3:
        results.push(trie.search(word) > 0 ? "YES" : "NO");
        break;
      case 4:
        results.push(trie.prefixNumber(word));
        break;
      default:
        console.error(`Invalid operation: ${operation}`);
        break;
    }
  }

  console.log(results.join("\n"));
});
