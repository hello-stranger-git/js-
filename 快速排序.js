const arr = [5, 4, 6, 3, 8, 1, 7, 2, 10, 9]
function sort(arr) {
    if(arr.length<2) return arr
    let left = []
    let right = []
    let referencevalue = arr[0]//a参考值
    for (let i = 1; i < arr.length; i++) {
        let ele = arr[i]
        //小的放left数组
        if (ele < referencevalue) {
            left.push(ele)
        } else {//大的放right数组
            right.push(ele)
        }
    }
    // 合并当前值
    return sort(left).concat(referencevalue, sort(right))
}
console.log(sort(arr))