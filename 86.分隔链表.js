/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let lHead = new ListNode(x, null)
    let gHead = new ListNode(x, null)
    let p = lHead
    let q = gHead
    while (head) {
        if (head.val < x) {
            p.next = head
            p = p.next
        } else {
            q.next = head
            q = q.next
        }
        head = head.next
    }
    q.next = null   // 跳出循环后要把大于x的新链表链尾的下一节点置空
    p.next = gHead.next
    return lHead.next
};
// @lc code=end

