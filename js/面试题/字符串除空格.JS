function space(str){
   return str.replace(/\s+/g,' ').trim();
}
let testStr = ' sad   asd sad  asd';
let spaceStr = space(testStr);
console.log(`beforeChanged:${testStr}-----change:${spaceStr}`)