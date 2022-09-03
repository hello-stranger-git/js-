const arr = [5, 4, 6, 3, 8, 1, 7, 2, 10, 9]
//找到第一个最大值
function sort1(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr
}
console.log('找到第一个最大值', sort1(arr))
//因为要找到数组的每一个最大值.所有，要对当前数组的所有的值进行排序，所以在sort1上演变
function sort2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log('对数组中的每一项排序', sort2(arr))
//因为之前已经排好序的可以不用在排序的，所以每一次排序的长度为当前长度减去排过的长度，可以在sort2上演变
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log('最终版', sort(arr))