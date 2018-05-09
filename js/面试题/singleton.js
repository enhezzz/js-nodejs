function singleton(){
    if(singleton.instance)
    return singleton.instance;
    this.name = 'enhezzz';
    this.age = 18;
    singleton.instance = this;
}
let a = new singleton();

let b = new singleton();

console.log(a,b)