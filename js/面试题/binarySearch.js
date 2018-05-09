function binarySearch(arr,item,start,end){
    let arrLength = arr.length;
    let index = null;
    if(arrLength === 1){
        index = arr[0] === item?0:-1;
        return index;
    }
    let startIndex = start,
        endIndex = end,
        middleIndex = parseInt((startIndex + endIndex)/2);
    if(startIndex<=endIndex){
    if(item == arr[middleIndex]) return middleIndex;
    else if(item>arr[middleIndex]){
        return binarySearch(arr,item,middleIndex+1,endIndex);
    } 
    else return binarySearch(arr,item,startIndex,middleIndex-1);
}
    return -1
}
console.log(binarySearch([1,2,3],1,0,2))