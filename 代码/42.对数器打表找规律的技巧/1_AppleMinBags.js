//6 8 12 14 18

// bags1方法：基于递归的解决方案
function bags1(apple) {
  let ans = f(apple);
  // 如果无法装满，返回-1；否则返回最少的袋子数。
  return ans !== Number.MAX_VALUE ? ans : -1;
}

// 当前还剩下rest个苹果，每次必须使用6或8容量的袋子装满，返回至少需要的袋子数。
function f(rest) {
  if (rest < 0) {
    return Number.MAX_VALUE;
  }

  if (rest === 0) {
    return 0;
  }
  // 使用8规格的袋子，剩余的苹果还需要几个袋子，有可能返回无效解
  let p1 = f(rest - 8);
  // 使用6规格的袋子，剩余的苹果还需要几个袋子，有可能返回无效解
  let p2 = f(rest - 6);

  // 如果p1或p2是有效解，加1表示当前的一个袋子装8个或6个苹果
  p1 = p1 !== Number.MAX_VALUE ? p1 + 1 : p1;
  p2 = p2 !== Number.MAX_VALUE ? p2 + 1 : p2;

  return Math.min(p1, p2);
}

// 打印找规律
function main() {
  for (let apple = 0; apple < 100; apple++) {
    console.log(`${apple}: ${bags1(apple)}`);
  }
}

main();

// bags2方法 总结规律
function bags2(apple) {
  // 如果苹果数是奇数，不可能用6和8的袋子装满。
  if ((apple & 1) !== 0) {
    return -1;
  }
  // 特殊处理18以下的情况，因为它们不能被统一的公式解决
  if (apple < 18) {
    if (apple === 0) {
      return 0;
    }
    if (apple === 6 || apple === 8) {
      return 1;
    }

    if (apple === 12 || apple === 14 || apple === 16) {
      return 2;
    }

    return -1;
  }
  // 对于18及以上的情况，可以通过公式解决：
  return Math.floor((apple - 18) / 8) + 3;
}
