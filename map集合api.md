创建实例let a = new Map()
map的key值可以是JS的任何数据类型
增：a.set(key,value),返回当前的map集合
删：a.delete(key),删除当前键/值对
    a.clear()清空所有的键/值对
查：a.get(key),返回当前查找的value值
    a.has(key),返回是否存在的boolean值
    a.keys(),返回当前所有的键，数组
    a.values(),返回当前的所有值，可迭代对象
遍历：for(let kv of a.entries()){
    console.log(kv) //kv为[key,value]
}
a.forEach(key,value)
获取当前map的长度：a.size

集合和Object区别：
    1、给固定内存大小，Map大约可以比Object多存储50%的键/值对
    2、插入：消耗大致一样，Maps稍微会快一些，大量插入Map性能更佳
    3、查找：大型差异极小，包含少量键/值，Object有时速度更快，大量查找某些情况选Object更佳
    4、删除：大量Map




