yieldContinuation(function*(){
    var v1=yield function(k){
        new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('Hello');
            },1500);
        }).then(k);
    };

    console.warn(v1);

    var v2=yield function(k){
        new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('World');
            },1500);
        }).then(k);
    };

    console.warn(v2);
});

function yieldContinuation(generator){
    
    next.call(generator());
}

function next(val){
    let generator = this;
    let current = generator.next(val);
    if(current.done)
    return;
    let fun = current.value;
    fun(function(res){

        next.call(generator,res);
    })
}
