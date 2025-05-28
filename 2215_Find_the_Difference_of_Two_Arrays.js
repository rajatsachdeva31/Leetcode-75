/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let ans1 = new Set(nums1),
    ans2 = new Set(nums2);

  nums2.forEach((num) => ans1.delete(num));
  nums1.forEach((num) => ans2.delete(num));

  return [[...ans1], [...ans2]];
};
