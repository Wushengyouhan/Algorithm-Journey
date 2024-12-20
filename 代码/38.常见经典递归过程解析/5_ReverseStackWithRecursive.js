function reverse(stack) {
  if (stack.length === 0) {
    return;
  }
  // 栈底出
  const num = bottomOut(stack);
  // 反转剩余底部分
  reverse(stack);
  // 把栈底放到栈顶
  stack.push(num);
}

function bottomOut(stack) {
  let ans = stack.pop();
  if (stack.length === 0) {
    // 到栈底了,把元素返回
    return ans;
  } else {
    // 非栈底元素时
    let last = bottomOut(stack);
    stack.push(ans);
    return last;
  }
}

// 测试代码
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

reverse(stack);

while (stack.length > 0) {
  console.log(stack.pop());
}
