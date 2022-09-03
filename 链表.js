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
    //判断元素是否相等
    defaultEquals(a, b) {
        return a === b
    }
    //向链表末尾添加一个新元素
    push(element) {

    }
    //向链表某个位置插入新元素
    insert(element, position) {

    }
    //返回链表某个位置的值，不存在返回undefined
    getElement(index) {

    }
    //从链表中移除一个元素
    remove(element) {

    }
    //返回元素在链表中的索引，没有该元素返回-1
    indexOf() {

    }
    //从链表的特定位置移出一个元素
    removeAt(position) {

    }
    //链表中是否为空
    isEmpty() {

    }
    //返回链表包含元素的个数
    size() {

    }
} 