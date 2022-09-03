const arr = [5, 4, 6, 3, 8, 1, 7, 2, 10, 9]
function sort(arr) {
    //排好序的数组
    let resArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        // 从当前排好序的最后一项开始比较
        for (let j = resArr.length - 1; j >= 0; j--) {
            /*
                需要排序的数组与当前排好序的数组进行比较
                若大于当排好序的当前项，则添加到当前项的后面一位
            */
            if (arr[i] > resArr[j]) {
                resArr.splice(j + 1, 0, arr[i])
                break
            } 
            /*
                若在排好序的数组中，找到最后一项还是没找到比他小的，
                则添加到排好序数组的第一项
            */
            if(j===0){
                resArr.unshift(arr[i])
            }
        }
    }
    return resArr
}
console.log(sort(arr))