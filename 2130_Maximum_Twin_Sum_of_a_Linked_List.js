/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let nextNode = new ListNode();

  while (slow) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let maxSum = 0;

  while (prev) {
    maxSum = Math.max(maxSum, head.val + prev.val);
    head = head.next;
    prev = prev.next;
  }

  return maxSum;
};
