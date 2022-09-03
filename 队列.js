class Queue {
    constructor() {
        this.count = 0//控制队列的大小
        this.lowestCount = 0 //第一个元素的下标
        this.item = {}//队列
    }
    //队列尾部添加
    qnqueue(element) {
        this.item[this.count] = element
        this.count++
    }
    //移除队列的第一项
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return result
    }
    //返回队列中第一个元素
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[this.lowestCount]
    }
    //队列是否为空
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    //队列的个数
    size() {
        return this.count - this.lowestCount
    }
    //清空队列
    clear() {
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    //打印队列
    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objString = `${this.item[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `,${this.item[i]}`
        }
        return objString
    }

}
let a = new Queue()

a.qnqueue(1)
a.qnqueue(2)
a.qnqueue(3)
a.qnqueue(4)
a.qnqueue(5)
console.log(a.isEmpty())
console.log(a.toString())
console.log(a.dequeue())
console.log(a.size())
console.log(a.peek())
a.clear()
console.log(a)

