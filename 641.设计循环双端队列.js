/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */

/**
 * @param {number} k
 */

let arr, head, tail, cnt, size

var MyCircularDeque = function (k) {
    arr = new Array(k)
    size = k
    head = tail = cnt = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false
    head = (head - 1 + size) % size
    arr[head] = value
    cnt++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false
    arr[tail] = value
    tail = (tail + 1) % size
    cnt++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) return false
    head = (head + 1) % size
    cnt--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) return false
    tail = (tail - 1 + size) % size
    cnt--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1
    return arr[head]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1
    return arr[(tail - 1 + size) % size]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return cnt === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return cnt === size
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

