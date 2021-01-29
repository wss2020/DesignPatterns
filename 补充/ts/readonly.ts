
class Cat{
    //此时将name属性设置为只读属性，外界只能访问name变量的值，但不能进行修改
    readonly name: string
    //在constructor构造函数中直接添加修饰符并定义了一个type属性用来接收用户传入的参数值
    constructor(public type: string,public age: Number) {
        this.name = "加菲";
        this.type = "橘猫"
        this.age = 18;
    }


}

let  cat = new Cat("橘猫",10);
cat.age = 10;
console.log(cat.age);
// cat.name = "123" //由于name属性是可读属性，不能被重新赋值，此时编译器会报错