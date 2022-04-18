/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */

let arr, head, tail, cnt, size

var MyCircularQueue = function (k) {
    // 开辟大小为k的空间
    arr = new Array(k);
    size = k
    head = tail = cnt = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    // 向队尾推入，队列长度+1，尾指针向后移动（作取余判断），返回成功/失败
    if (!this.isFull()) {
        arr[tail] = value
        tail = (tail + 1) % size
        cnt++
        return true
    } else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    // 从队头推出，队列长度-1，头指针向右移动（作取余判断），返回成功/失败
    if (this.isEmpty()) {
        return false
    } else {
        head = (head + 1) % size
        cnt--
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    // 返回头指针指向的元素，队列为空则返回-1
    if (this.isEmpty()) return -1
    return arr[head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    // 返回尾指针指向的元素，队列为空则返回-1
    if (this.isEmpty()) return -1
    // return arr[tail === 0 ? size - 1 : tail - 1]
    return arr[(tail - 1 + size) % size]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    // 队列长度为0
    return cnt === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    // 队列长度是否等于开辟的空间大小
    return cnt === size
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

