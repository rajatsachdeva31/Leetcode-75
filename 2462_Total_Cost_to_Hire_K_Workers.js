/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let total = 0;
  let l = 0;
  let r = costs.length - 1;

  const leftHeap = new MinPriorityQueue();
  const rightHeap = new MinPriorityQueue();

  for (let i = 0; i < k; i++) {
    while (leftHeap.size() < candidates && l <= r) {
      leftHeap.enqueue(costs[l]);
      l++;
    }

    while (rightHeap.size() < candidates && l <= r) {
      rightHeap.enqueue(costs[r]);
      r--;
    }

    const leftMin = leftHeap.size() > 0 ? leftHeap.front() : Infinity;
    const rightMin = rightHeap.size() > 0 ? rightHeap.front() : Infinity;

    if (leftMin <= rightMin) {
      total += leftHeap.dequeue();
    } else {
      total += rightHeap.dequeue();
    }
  }

  return total;
};
