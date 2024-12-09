let readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//监听一行数据的输入
rl.on('line', (input) => {
  myFunc(input)
})

//函数逻辑
const myFunc = (str) => [
  console.log('你输入的是: ',str)
]