//辅助节点
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}
class LinkedList {
    constructor() {
        this.count = 0 //链表中元素的数量
        this.head = null //当前链表
    }
    //向链表末尾添加一个新元素
    push(element) {
        const node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    //向链表某个位置插入新元素
    insert(element, position) {
        if (position > 0 && position < this.count) {
            const node = new Node(element)
            if (position === 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                let previous = this.getElement(position - 1)
                let current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
        }
        return false
    }
    //返回链表某个位置节点，不存在返回undefined
    getElement(index) {
        if (index > this.count || this.index < 0 || !this.head) return undefined
        let node = this.head
        for (let i = 0; i < index && node != null; i++) {
            node = node.next
        }
        return node
    }
    //从链表中移除一个元素
    remove(element) {
        let current = this.head
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    //返回元素在链表中的索引，没有该元素返回-1
    indexOf(element) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.element === element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    //从链表的特定位置移出一个元素
    removeAt(position) {
        let current = this.head
        if (position === 0) {
            this.head = current.next
        } else {
            let pervious
            for (let i = 0; i < position; i++) {
                pervious = current
                current = current.next
            }
            pervious.next = current.next
        }
        this.count--
        return current.element
    }
    //链表中是否为空
    isEmpty() {
        return this.size() === 0
    }
    //返回链表包含元素的个数
    size() {
        return this.count
    }
    //获取链表
    getHead() {
        return this.head
    }
    //打印链表
    tostirng() {
        let value = ''
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            if (i !== 0) {
                value += "=>"
            }
            value += current.element
            current = current.next

        }
        return value
    }
}
let list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.removeAt(1)
console.log(list.getElement(1))
console.log(list.indexOf(1))
list.insert(2, 1)
list.remove(1)
console.log(list.tostirng())
list.push(4)
console.log(list.getHead())