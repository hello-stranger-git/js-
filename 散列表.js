class HashTable {
    constructor() {
        this.table = {}
    }
    //添加
    put(key, value) {
        if (key !== null && value != null) {
            const position = this.hasCode(key)
            this.table[position] = value
            return true
        }
        return false
    }
    //移除
    remove(key) {
        const hash = this.hasCode(key)
        if (this.table[hash]) {
            delete this.table[hash]
            return true
        }
        return false
    }
    //获取
    get(key) {
        return this.table[this.hasCode(key)] === null ? undefined : this.table[this.hasCode(key)]
    }
    hasCode(key) {
        return this.loseloseHashCode(key)
    }
    //散列函数
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key
        }
        let tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
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
let hashTable = new HashTable()
hashTable.put('a', 1)
console.log(hashTable.get('a'))
console.log(hashTable.remove('b'))
console.log(hashTable.table)