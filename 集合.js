class Set {
    constructor() {
        this.items = {}
    }
    //向集合添加一个新元素
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    //移除一个元素
    delete(element) {
        if (!this.has(element)) {
            delete this.items[element]
            return true
        }
        return false

    }
    //元素是否在集合中
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    //移除所有元素
    clear() {
        this.items = {}
    }
    //集合中元素的个数
    size() {
        let count = 0
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++
            }
        }
        return count
    }
    //返回一个包含集合中所有的值的数组
    values() {
        let values = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key)
            }
        }
        return values

    }
}