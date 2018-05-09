function componse(...func){
    return function(num){
        let length = func.length;
    return (function doubleCom(index){
        if(index === length-1)
            return func[index](num)
        return func[index](doubleCom(index+1));
    })(0)
    }
}

let a = componse(function add(addition){return addition+1},function(num){return num});
console.log(a(4));