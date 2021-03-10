
interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request. RealSubject：处理请求。');
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request. 代理：在发出真实请求之前检查访问权限。');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request. 代理：记录请求时间。');
    }
}

function clientCode(subject: Subject) {
    // ...
    subject.request();
    // ...
}

console.log('Client: Executing the client code with a real subject: 客户：以真实的主题执行客户代码：');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy: 客户端：使用代理执行相同的客户端代码：');
const proxy = new Proxy(realSubject);
clientCode(proxy);
