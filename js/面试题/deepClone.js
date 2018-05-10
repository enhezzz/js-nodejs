// function deepClone(obj){
//     return JSON.parse(JSON.stringify(obj));
// }
// let obj1 = {a:1,b:{c:1}};
// let obj2 = deepClone(obj1);
// let obj3 = {get name(){return 1}}
// console.log(Object.getOwnPropertyDescriptor(obj3,'name'))
// console.log(deepClone(obj3))
// let obj4 = Object.defineProperty({},'name',{get: function(){return 1},enumerable:true})

// obj1.a = 2,obj1.b.c = 2;
// console.log(obj1,obj2);
// console.log(obj3,obj4)
// let object1 = {};
// Object.defineProperties(object1,  {
//     'property1': {
//         value: 42,
//     writable: false,
//     enumerable:true
//     }
    
//   });
//   console.log(object1)
var obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  var copy = Object.assign({}, obj); 
  console.log(copy); 
function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
      // by default, Object.assign copies enumerable Symbols too
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  var copy = completeAssign({}, obj);
  console.log(copy);