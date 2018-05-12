// Promise.prototype.finally = function (callback) {
//     var Promise = this.constructor;
//     return this.then(
//         function (value) {
//             // console.log(value)
//             Promise.resolve(callback()).then(
//                 function (v) {
//                     console.log(v)
//                     return value;
//                 }
//             );
//         },
//         function (reason) {
//             Promise.resolve(callback()).then(
//                 function () {
//                     throw reason;
//                 }
//             );
//         }
//     );


//     // return Promise.resolve(callback).then(function(value){
//     //     value()
//     // })
// }


Promise.prototype.finally = function (callback) {
    // callback()    
    return this.then(function (val) {
        callback()
    })
}
new Promise((resolve, reject) => {
    resolve('1');
}).then((resolvedData) => {
    console.log('i am resolved data:' + resolvedData);
    // return 1
}).catch((err) => {
    console.log(err.stack);
}).finally(function () {

    console.log('i am finally func');
    return 2
})

// 总结：  promise是异步解决方案之一，异步任务会被放置在一个eventloop中，当主线程执行栈执行完毕之后，
//那些已经resolved/rejected的异步任务将回到主线程栈中被调用（也就是then或catch中的回掉函数被执行）