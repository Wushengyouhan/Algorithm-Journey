//用户输入
//第一行代表行数
//后面n行是数据
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let data = []
let n = null
let curline = 0

rl.on('line', (input) => {
  if ( n === null ) {
    //接收行数
    n = parseInt(input)
  } else {
    //把这行数据变为数组，且每一项都转化为数字
    data.push(input.split(" ").map(Number))
    curline++
  }

  //输入行数满足
  if (curline === n) {
    rl.close()
  }
})

// 关闭接口后，执行处理或输出
rl.on('close', () => {
  myFunc(data)
});

const myFunc = (arr) => {
  console.log("输入的数据是: ");
  console.log(arr);
}