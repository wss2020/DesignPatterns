let oldObject = {
    a:1,
    b:2,
    c:{
        age:23
    }
}

function deepCopy(object){
    let newObject = {}
    for(let e in object){
        if (typeof object[e] == 'object'){
            newObject[e] = deepCopy(object[e]);
        }else{
            newObject[e] = object[e];
        }
    }
    return newObject;
}

function deepCopy1(object){
    return JSON.parse(JSON.stringify(object));
}

let newObject = deepCopy1(oldObject);
console.log("newObject: ");
console.log(newObject);
console.log('-------------')
newObject.a = 12;
newObject.b = 12;
newObject.c.age = 12;

console.log("oldObject: ");
console.log(oldObject);

console.log('-------------');

console.log("newObject: ");
console.log(newObject);













