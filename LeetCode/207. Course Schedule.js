/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, pre] of prerequisites) {
    inDegree[course]++;
    graph[pre].push(course);
  }

  let cnt = 0;
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    let selected = queue.shift();
    cnt++;

    let afterCourses = graph[selected];

    for (let c of afterCourses) {
      inDegree[c]--;
      if (inDegree[c] === 0) {
        queue.push(c);
      }
    }
  }

  return cnt === numCourses;
};
