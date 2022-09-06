class Directionary {
    constructor() {
        this.table = {}
    }
    //添加新元素,存在则覆盖
    set(key, value) {
        if (key !== null && value !== null) {
            this.table[this.toStrFn(key)] = value
            return true;
        }
        return false
    }
    //通过key移除元素
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false;
    }
    //key是否存在
    hasKey(key) {
        return this.table[this.toStrFn([key])] !== null
    }
    //通过key查找元素
    get(key) {
        return !this.table[this.toStrFn(key)] ? undefined : this.table[this.toStrFn(key)]
    }
    //清空字典
    clear() {
        this.table = {}
    }
    //元素的个数
    size() {
        return Object.keys(this.table).length
    }
    //是否为空
    isEmpty() {
        return this.size() === 0
    }
    //返回所有的key，数组形式
    keys() {
        return Object.keys(this.table)
    }
    //返回所有的value，数组形式
    values() {
        return Object.values(this.table)
    }
    //迭代字典中所有的键值对。callbackFn有两个参数：key和value。该方法可以在回调函数返回false时被中止（和Array类中的every方法相似）
    forEach(callback) {
        let keys = this.keys()
        for (let i = 0; i < keys.length; i++) {
            callback(keys[i], this.table[keys[i]])
        }
    }
    //转换为字符串
    toStrFn(value) {
        if (value === null) {
            return 'NULL'
        } else if (value === undefined) {
            return 'UNDEFINED'
        } else if (typeof value === 'string' || value instanceof String) {
            return value + ''
        }
        return value.toString()
    }
}