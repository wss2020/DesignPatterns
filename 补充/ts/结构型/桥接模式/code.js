var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "Abstraction: Base operation with(\u62BD\u8C61\uFF1A\u57FA\u672C\u64CD\u4F5C\uFF1A):\n" + result + " ";
    };
    return Abstraction;
}());
var ExtendedAbstraction = /** @class */ (function (_super) {
    __extends(ExtendedAbstraction, _super);
    function ExtendedAbstraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedAbstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "ExtendedAbstraction: Extended operation with()ExtendedAbstraction\uFF1A\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9\u8FDB\u884C\u6269\u5C55\u64CD\u4F5C\uFF1A:\n" + result + " ";
    };
    return ExtendedAbstraction;
}(Abstraction));
var ConcreteImplementationA = /** @class */ (function () {
    function ConcreteImplementationA() {
    }
    ConcreteImplementationA.prototype.operationImplementation = function () {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.  ConcreteImplementationA：这是平台A上的结果。';
    };
    return ConcreteImplementationA;
}());
var ConcreteImplementationB = /** @class */ (function () {
    function ConcreteImplementationB() {
    }
    ConcreteImplementationB.prototype.operationImplementation = function () {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.  ConcreteImplementationB：这是平台B上的结果。';
    };
    return ConcreteImplementationB;
}());
function clientCode(abstraction) {
    // ..
    console.log(abstraction.operation());
    // ..
}
var implementation = new ConcreteImplementationA();
var abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log('');
implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
