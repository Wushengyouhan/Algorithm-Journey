//辅助函数

// 根据种子生成偶数长度的回文数
function evenEnlarge(seed) {
  // 123 => 123321
  let ans = seed;
  while (seed !== 0n) {
    ans = ans * 10n + (seed % 10n);
    seed = seed / 10n;
  }
  return ans;
}

// 根据种子生成奇数长度的回文数
function oddEnlarge(seed) {
  // 123 => 12321
  let ans = seed;
  seed = seed / 10n;
  while (seed !== 0n) {
    ans = ans * 10n + (seed % 10n);
    seed = seed / 10n;
  }
  return ans;
}

// 检查是否在范围 [l, r] 内且是回文数
function check(ans, l, r) {
  return l <= ans && ans <= r && isPalindrome(ans);
}

// 回文数判断
function isPalindrome(x) {
  let offset = 1n;
  // 得到和x位数一样的offset
  // 121
  // 100
  while (x / offset >= 10n) {
    offset *= 10n;
  }

  // 首尾判断
  while (x !== 0n) {
    if (x / offset !== x % 10n) {
      return false;
    }

    // 掐头去尾
    // 121
    // 2
    x = (x % offset) / 10n;
    offset = offset / 100n;
  }

  return true;
}

// 打印范围内所有满足条件的数
function collect() {
  let l = 1n;
  let r = BigInt(Math.pow(10, 18));
  let limit = BigInt(Math.floor(Math.sqrt(Number(r))));
  let seed = 1n;
  let num = 0n;
  let ans = [];
  while (num < limit) {
    // 生成偶数长度的回文数字
    num = evenEnlarge(seed);
    if (check(num * num, l, r)) {
      ans.push(num * num);
    }

    // 生成奇数长度的回文数字
    num = oddEnlarge(seed);
    if (check(num * num, l, r)) {
      ans.push(num * num);
    }
    // 千万别忘了seed增大，不然死循环
    seed++;
  }
  return ans.sort((a, b) => Number(a) - Number(b));
}

function main() {
  let ans = collect();

  for (let a of ans) {
    console.log(a + "n,");
  }
  console.log("size: ", ans.length);
}

main();

// 应用结果
const records = [
  1n,
  4n,
  9n,
  121n,
  484n,
  10201n,
  12321n,
  14641n,
  40804n,
  44944n,
  1002001n,
  1234321n,
  4008004n,
  100020001n,
  102030201n,
  104060401n,
  121242121n,
  123454321n,
  125686521n,
  400080004n,
  404090404n,
  10000200001n,
  10221412201n,
  12102420121n,
  12345654321n,
  40000800004n,
  1000002000001n,
  1002003002001n,
  1004006004001n,
  1020304030201n,
  1022325232201n,
  1024348434201n,
  1210024200121n,
  1212225222121n,
  1214428244121n,
  1232346432321n,
  1234567654321n,
  4000008000004n,
  4004009004004n,
  100000020000001n,
  100220141022001n,
  102012040210201n,
  102234363432201n,
  121000242000121n,
  121242363242121n,
  123212464212321n,
  123456787654321n,
  400000080000004n,
  10000000200000001n,
  10002000300020001n,
  10004000600040001n,
  10020210401202001n,
  10022212521222001n,
  10024214841242001n,
  10201020402010201n,
  10203040504030201n,
  10205060806050201n,
  10221432623412201n,
  10223454745432201n,
  12100002420000121n,
  12102202520220121n,
  12104402820440121n,
  12122232623222121n,
  12124434743442121n,
  12321024642012321n,
  12323244744232321n,
  12343456865434321n,
  12345678987654321n,
  40000000800000004n,
  40004000900040004n,
];

var superpalindromesInRange = function (left, right) {
  const l = BigInt(left);
  const r = BigInt(right);

  let i = 0;
  for (; i < records.length; i++) {
    if (records[i] >= l) {
      break;
    }
  }

  let j = records.length - 1;
  for (; j >= 0; j--) {
    if (records[j] <= r) {
      break;
    }
  }

  return j - i + 1;
};
