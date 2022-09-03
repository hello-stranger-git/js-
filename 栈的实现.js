class Stack {
    constructor() {
        this.arr = []
    }
    //入栈
    push(value) {
        this.arr.push(value)
    }
    //出栈
    pop() {
        return this.arr.pop()
    }
    //返回栈顶元素
    peek() {
        return this.arr[this.arr.length - 1]
    }
    //返回当前栈的长度
    size() {
        return this.arr.length
    }
    //判断当前栈是否为空
    isEmpty() {
        return this.arr.length === 0
    }
    //清空栈
    clear() {
        this.arr = []
    }
    //获取当前栈
    toString() {
        return this.arr.toString()
    }
}