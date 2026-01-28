const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.next = 1;
  this.pq = new MinPriorityQueue();
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  if (!this.pq.isEmpty()) {
    return this.pq.dequeue();
  }
  return this.next++;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.pq.enqueue(seatNumber);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
