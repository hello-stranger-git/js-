const arr = [5, 4, 6, 3, 8, 1, 7, 2, 10, 9]
//找到第一个最小值，放在最前面
function sort1(arr) {
    //记录当前最小值的索引
    let min = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[min] > arr[i]) {
            min = i
        }
    }
    // 当前索引与最小值索引的值互换位置
    [arr[0], arr[min]] = [arr[min], arr[0]]
    return arr
}
console.log(sort1(arr))
//找到所有的最小值，依次，放在最前面
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
console.log(sort(arr))