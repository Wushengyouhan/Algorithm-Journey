// 定义前缀树的节点结构
class TrieNode {
  constructor() {
    this.children = {}; // 存放子节点的哈希表 (字符 -> 节点)
    this.isEnd = false; // 标记是否为某个单词的结尾
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // 初始化一棵空树
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (const char of word) {
      // 如果当前字符的分支不存在，新建一个节点
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      // 指针顺着树往下爬
      curr = curr.children[char];
    }
    // 走完整个单词后，给最后一个节点打上结束标记
    curr.isEnd = true;
  }

  /**
   * 辅助函数：顺着树爬，看能不能走完指定的字符串
   * @param {string} word
   * @return {TrieNode | null} 走完了返回最后一个节点，断了返回 null
   */
  traverse(word) {
    let curr = this.root;
    for (const char of word) {
      // 一旦路断了，直接返回 null
      if (!curr.children[char]) {
        return null;
      }
      curr = curr.children[char];
    }
    return curr;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.traverse(word);
    // 不仅要能走完，而且最后一个节点必须被打上了单词结束的标记
    return node !== null && node.isEnd === true;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.traverse(prefix);
    // 只要能走完前缀就行，不用管是不是完整的单词
    return node !== null;
  }
}
