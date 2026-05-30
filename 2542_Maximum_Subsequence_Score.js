/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  let result = 0;
  let sum = 0;
  let heap = new MinPriorityQueue((e) => e);

  const arr = nums1.map((val, i) => [nums2[i], val]);
  arr.sort((a, b) => b[0] - a[0]);

  for (const [max, val] of arr) {
    if (heap.size() === k) sum -= heap.dequeue();
    sum += val;
    heap.enqueue(val);
    if (heap.size() === k) result = Math.max(result, sum * max);
  }
  return result;
};
