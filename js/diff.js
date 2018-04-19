function diff(a,b){
    let aType = typeof a,bType = typeof b;
    if(aType !== 'object'&& bType !=='object'){
        return a === b;
    }
    if((aType !=='object'&&bType === 'object') || (bType !== 'object'&&aType === 'object')){
        return false;
    }
    let aLength = Object.keys(a).length,bLength = Object.keys(b).length;
    if(aLength != bLength)
    return false;
    for(let item in a){
        if(item in b){
            if(!diff(a[item],b[item])){
                return false;
            }
           
        }else
        return false;
    }
    return true;
}


console.log(diff({name:{age:1},a:2},{name:{age:1},a:1}));