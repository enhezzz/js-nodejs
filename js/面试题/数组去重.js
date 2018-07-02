function func1(arr) {
    let newArr = [];
    for (let item of arr) {
        if (newArr.indexOf(item) == -1) {
            newArr.push(item)
        }
    }
    return newArr
}

// console.log(func1([1,1,2,3]))
function func2(arr) {
    return arr.filter((item, index) => {
        return index == arr.indexOf(item)  //判断第一次出现的索引和当前查询的索引是否相同
    })
}
// console.log(func2([1,2,3,3]))

function func3(arr){

    return Array.from(new Set(arr));   //Set 实现了Symbol.Iterator 接口。故可以作为from参数
}

console.log(func3([1,2,2,3]))