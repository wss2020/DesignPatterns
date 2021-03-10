
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 * Creator类声明了应该返回一个产品类的对象。创建者的子类通常提供此方法的实现。
 */
abstract class Creator {
    /**
     * Note that the Creator may also provide some default implementation of the factory method.
     * 请注意，创建者可能还会提供一些工厂方法的默认实现。
     */
    public abstract factoryMethod(): Product;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     * 另请注意，尽管其名称如此，但创建者的主要责任是不创造产品。通常，它包含一些核心业务逻辑依赖于 由 工厂方法返回的产品对象。
     * 子类可以通过覆盖工厂方法间接更改该业务逻辑并从中返回不同类型的产品。
     */
    public someOperation(): string {
        // Call the factory method to create a Product object.    调用工厂方法创建一个Product对象。
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the resulting product's type.
 * 具体的创建者会覆盖工厂方法，以更改最终产品的类型。
 */
class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product classes.
     * 请注意，该方法的签名仍使用抽象产品类型，即使实际上是从方法。这样，创建者可以保持独立于具体产品的状态类。
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * The Product interface declares the operations that all concrete products must implement.
 * 产品接口声明所有具体产品必须执行的操作。
 */
interface Product {
    operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 * 具体产品提供产品接口的各种实现。
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 * 客户端代码使用具体创建者的实例，尽管通过它的基本接口。只要客户继续通过以下方式与创作者合作基本接口，您可以将其传递给任何创建者的子类。
 */
function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());









