/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

let queue

var RecentCounter = function () {
    queue = new Array()
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    queue.push(t)
    let last = queue.length - 1
    let index = last - 1
    while (index >= 0) {
        if (queue[last] - queue[index] > 3000) {
            queue.splice(0, index + 1)
            index = 0
        }
        index--
    }
    return queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

