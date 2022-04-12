/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    /**
     * 1.第一轮遍历先给每个节点后插入对应节点的copy，使节点和节点的copy的random指向同一个节点
     * 2.第二轮遍历使copy节点的random指向对应节点random指向的下一节点
     * 3.第三轮遍历挑出copy节点即可
     */
    if (!head) return head
    let p = head
    while (p) {
        let copy = new Node(p.val, p.next, p.random)
        p.next = copy
        p = copy.next
    }
    p = head
    while (p) {
        let copy = p.next
        copy.random = p.random?.next || null
        p = copy.next
    }
    let newList = head.next
    while (head) {
        let next = head.next
        head.next = next?.next || null
        head = next
    }
    return newList
};
// @lc code=end

