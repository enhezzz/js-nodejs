function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
let obj1 = {a:1,b:{c:1}};
let obj2 = deepClone(obj1);
let obj3 = {get name(){return 1}}
console.log(Object.getOwnPropertyDescriptor(obj3,'name'))

let obj4 = Object.defineProperty({},'name',{get: function(){return 1},enumerable:true})

obj1.a = 2,obj1.b.c = 2;
console.log(obj1,obj2);
console.log(obj3,obj4)
let object1 = {};
Object.defineProperties(object1,  {
    'property1': {
        value: 42,
    writable: false,
    enumerable:true
    }
    
  });
// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false,
//     enumerable:true
//   });
  console.log(object1)