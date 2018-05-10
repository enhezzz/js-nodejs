function _new(constructor, ...params) {
    let obj = new Object();
    obj.__proto__ = constructor.prototype;
    constructor.apply(obj, params);
    return obj;
}
function boy(name, age) {
    this.age = age;
    this.name = name;
}
boy.prototype = {
    showIntro: function () {
        console.log(`name:${this.name}----age:${this.age}`)
    }
}
let hgs = _new(boy, 'hgs', 21);
console.log(hgs.name)
console.log(hgs.age)
hgs.showIntro()
console.log(hgs)