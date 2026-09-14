/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // 1. 建立邻接表形式的带权图
  // graph 的结构: { "a": Map{"b" => 2.0}, "b": Map{"a" => 0.5, "c" => 3.0} }
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const val = values[i];

    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());

    // 存入正向边和反向边
    graph.get(a).set(b, val);
    graph.get(b).set(a, 1 / val);
  }

  // 2. 辅助函数：DFS 寻找从 start 到 end 的路径乘积
  const dfs = function (start, end, visited) {
    // 图里根本没这个节点，或者走进了死胡同
    if (!graph.has(start)) return -1.0;
    // 找到了终点，返回基础乘数 1.0
    if (start === end) return 1.0;

    // 标记已访问，防止兜圈子
    visited.add(start);

    // 遍历邻居 (Map 默认迭代器就是 entries，所以直接 of graph.get(start) 即可)
    for (const [next, weight] of graph.get(start)) {
      if (!visited.has(next)) {
        const res = dfs(next, end, visited);
        // 如果这条路能通向终点，把当前权重乘进去并向上返回
        if (res !== -1.0) {
          return weight * res;
        }
      }
    }

    return -1.0;
  };

  // 3. 处理所有的 queries
  const res = [];
  for (const [start, end] of queries) {
    // 每次查询前，新建一个空白的 visited 集合
    res.push(dfs(start, end, new Set()));
  }

  return res;
};
