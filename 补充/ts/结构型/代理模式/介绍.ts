
/**
在 TypeScript 中使用模式

使用示例： 尽管代理模式在绝大多数 TypeScript 程序中并不常见， 但它在一些特殊情况下仍然非常方便。 当你希望在无需修改客户代码的前提下于已有类的对象
        上增加额外行为时， 该模式是无可替代的。

识别方法： 代理模式会将所有实际工作委派给一些其他对象。 除非代理是某个服务的子类， 否则每个代理方法最后都应该引用一个服务对象。


概念示例
本例说明了代理设计模式的结构并重点回答了下面的问题：

    它由哪些类组成？
    这些类扮演了哪些角色？
    模式中的各个元素会以何种方式相互关联？
*/


    /**
     * The Subject interface declares common operations for both RealSubject and the
     * Proxy. As long as the client works with RealSubject using this interface,
     * you'll be able to pass it a proxy instead of a real subject.
     Subject接口为RealSubject和Proxy。只要客户端使用此接口与RealSubject配合使用，您可以将其传递给代理而不是真实主题。
     */
    interface Subject {
        request(): void;
    }

    /**
     * The RealSubject contains some core business logic. Usually, RealSubjects are
     * capable of doing some useful work which may also be very slow or sensitive -
     * e.g. correcting input data. A Proxy can solve these issues without any
     * changes to the RealSubject's code.
     RealSubject包含一些核心业务逻辑。通常，RealSubjects是能够做一些有用的工作，这些工作也可能非常缓慢或敏感-
     例如校正输入数据。代理可以毫无问题地解决这些问题更改RealSubject的代码。
     */
    class RealSubject implements Subject {
        public request(): void {
            console.log('RealSubject: Handling request.');
        }
    }

    /**
     * The Proxy has an interface identical to the RealSubject.
     * Proxy 具有与 RealSubject 相同的接口。
     */
    class Proxy implements Subject {
        private realSubject: RealSubject;

        /**
         * The Proxy maintains a reference to an object of the RealSubject class. It
         * can be either lazy-loaded or passed to the Proxy by the client.
         * Proxy 维护对RealSubject类的对象的引用。它可以由客户端延迟加载或传递给代理。
         */
        constructor(realSubject: RealSubject) {
            this.realSubject = realSubject;
        }

        /**
         * The most common applications of the Proxy pattern are lazy loading,
         * caching, controlling the access, logging, etc. A Proxy can perform one of
         * these things and then, depending on the result, pass the execution to the
         * same method in a linked RealSubject object.
         * 代理模式最常见的应用是 延迟加载，缓存，控制访问，日志记录等。代理可以执行以下操作之一
         * 这些东西，然后根据结果,将执行传递给链接的RealSubject对象中的相同方法。
         */
        public request(): void {
            if (this.checkAccess()) {
                this.realSubject.request();
                this.logAccess();
            }
        }

        private checkAccess(): boolean {
            // Some real checks should go here. 一些真实的检查应该去这里。
            console.log('Proxy: Checking access prior to firing a real request.');

            return true;
        }

        private logAccess(): void {
            console.log('Proxy: Logging the time of request.');
        }
    }

    /**
     * The client code is supposed to work with all objects (both subjects and
     * proxies) via the Subject interface in order to support both real subjects and
     * proxies. In real life, however, clients mostly work with their real subjects
     * directly. In this case, to implement the pattern more easily, you can extend
     * your proxy from the real subject's class.
     * 客户端代码应该适用于所有对象（主题和对象）。代理）通过主题界面，以便同时支持真实主题和代理。但是，在现实生活中，客户大多会处理他们的真实主题
     直接地。在这种情况下，为了更轻松地实现模式，您可以扩展您的代理人来自真实主题的班级。
     */
    function clientCode(subject: Subject) {
// ...

        subject.request();

// ...
    }

    console.log('Client: Executing the client code with a real subject:');
    const realSubject = new RealSubject();
    clientCode(realSubject);

    console.log('');

    console.log('Client: Executing the same client code with a proxy:');
    const proxy = new Proxy(realSubject);
    clientCode(proxy);


    // 执行结果
    /**

     Client: Executing the client code with a real subject:
     RealSubject: Handling request.

     Client: Executing the same client code with a proxy:
     Proxy: Checking access prior to firing a real request.
     RealSubject: Handling request.
     Proxy: Logging the time of request.
     * */



























