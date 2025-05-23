/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  const prefix = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  const postfix = new Array(n).fill(1);
  for (let i = n - 2; i > -1; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * postfix[i];
  }

  return answer;
};
