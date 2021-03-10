
let map = new Map();
map.set(0,10);
map.set(1,11);
map.set(2,12);

console.log( map );

console.log( typeof map);


let newMap = new Map(map);
newMap.set(0,11);
console.log( map );
console.log(newMap);


