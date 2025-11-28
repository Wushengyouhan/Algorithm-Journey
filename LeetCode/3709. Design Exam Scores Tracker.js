class ExamTracker {
  constructor() {
    // 存储每次考试的时间
    // 题目保证 record 调用是时间递增的，所以这个数组天然是有序的
    this.times = [];

    // 存储分数的"前缀和"
    // preSums[i] 表示前 i 次考试的总分
    // 初始化放一个 0，是为了方便后续计算区间和（避免处理边界下标为 -1 的情况）
    this.preSums = [0];
  }

  /**
   * 记录考试时间和分数
   * 时间复杂度: O(1)
   */
  record(time, score) {
    // 1. 记录时间
    this.times.push(time);

    // 2. 计算并记录新的前缀和
    // 新的前缀和 = 之前所有分数的总和 (数组最后一个) + 当前分数
    const currentSum = this.preSums[this.preSums.length - 1] + score;
    this.preSums.push(currentSum);
  }

  /**
   * 计算指定时间段内的总分
   * 时间复杂度: O(log N) - 主要耗时在两次二分查找
   */
  totalScore(startTime, endTime) {
    // 1. 找到时间段的起点：在 times 中找到第一个 >= startTime 的位置
    let startIdx = this._lowerBound(startTime);

    // 2. 找到时间段的终点：在 times 中找到最后一个 <= endTime 的位置
    let endIdx = this._upperBound(endTime);

    // 3. 利用前缀和公式计算区间分数：Sum(L, R) = P[R+1] - P[L]
    //
    // 细节解释：
    // - endIdx 是 times 的下标，对应的累加和在 preSums 中的下标是 endIdx + 1
    // - startIdx 是 times 的下标，对应的累加和在 preSums 中的下标是 startIdx + 1
    //   但我们要减去的是 startIdx "之前" 的分数，即 preSums[startIdx]
    //
    // 边界情况自动处理：
    // 如果 startIdx > endIdx (区间内无考试)，数学上会变成 preSums[k] - preSums[k] = 0，逻辑也是对的。
    return this.preSums[endIdx + 1] - this.preSums[startIdx];
  }

  /**
   * Lower Bound: 寻找左边界
   * 目标：找到第一个 times[i] >= target 的下标
   * 如果所有元素都小于 target，返回 times.length
   */
  _lowerBound(target) {
    let left = 0;
    let right = this.times.length - 1;

    while (left <= right) {
      // 使用 Math.floor 取整，计算中间位置
      const mid = Math.floor((left + right) / 2);

      if (this.times[mid] >= target) {
        // mid 可能是目标，也可能左边还有更早的满足条件的
        // 所以我们记录这个范围，并尝试向左收缩 (right 变小)
        right = mid - 1;
      } else {
        // mid 太小了，不满足条件，必须去右边找
        left = mid + 1;
      }
    }
    // 循环结束后，left 指向的一定是第一个满足 >= target 的位置
    return left;
  }

  /**
   * Upper Bound: 寻找右边界
   * 目标：找到最后一个 times[i] <= target 的下标
   * 如果所有元素都大于 target，返回 -1
   */
  _upperBound(target) {
    let left = 0;
    let right = this.times.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.times[mid] <= target) {
        // mid 可能是目标，也可能右边还有更晚的满足条件的
        // 所以我们尝试向右试探 (left 变大)
        left = mid + 1;
      } else {
        // mid 太大了，已经超出了 endTime，必须去左边找
        right = mid - 1;
      }
    }
    // 循环结束后，right 指向的一定是最后一个满足 <= target 的位置
    // (因为 left 最后停在了第一个 > target 的位置，right 在它左边)
    return right;
  }
}

/**
 * Your ExamTracker object will be instantiated and called as such:
 * var obj = new ExamTracker()
 * obj.record(time,score)
 * var param_2 = obj.totalScore(startTime,endTime)
 */
