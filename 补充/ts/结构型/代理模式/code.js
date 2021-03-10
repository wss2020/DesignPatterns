var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request. RealSubject：处理请求。');
    };
    return RealSubject;
}());
var Proxy = /** @class */ (function () {
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    Proxy.prototype.checkAccess = function () {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request. 代理：在发出真实请求之前检查访问权限。');
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request. 代理：记录请求时间。');
    };
    return Proxy;
}());
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}
console.log('Client: Executing the client code with a real subject: 客户：以真实的主题执行客户代码：');
var realSubject = new RealSubject();
clientCode(realSubject);
console.log('');
console.log('Client: Executing the same client code with a proxy: 客户端：使用代理执行相同的客户端代码：');
var proxy = new Proxy(realSubject);
clientCode(proxy);
