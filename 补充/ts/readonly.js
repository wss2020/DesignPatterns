var Cat = /** @class */ (function () {
    //在constructor构造函数中直接添加修饰符并定义了一个type属性用来接收用户传入的参数值
    function Cat(type, age) {
        this.type = type;
        this.age = age;
        this.name = "加菲";
        this.type = "橘猫";
        this.age = 18;
    }
    return Cat;
}());
var cat = new Cat("橘猫", 10);
cat.age = 10;
console.log(cat.age);
// cat.name = "123" //由于name属性是可读属性，不能被重新赋值，此时编译器会报错
