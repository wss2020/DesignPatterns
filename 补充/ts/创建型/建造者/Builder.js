/**
   Concrete Builder类遵循Builder接口，并提供构建步骤的特定实现。您的程序可能具有几种不同的Builders，它们的实现方式有所不同。
 */
var ConcreteBuilder1 = /** @class */ (function () {
    /** reset后的构建器实例应包含一个空白 Product对象，该对象将用于进一步的组装。 */
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new Product1();
    };
    /**
     * All production steps work with the same product instance.
     * 所有生产步骤都使用相同的产品实例。
     */
    ConcreteBuilder1.prototype.producePartA = function () {
        this.product.parts.push('PartA1');
    };
    ConcreteBuilder1.prototype.producePartB = function () {
        this.product.parts.push('PartB1');
    };
    ConcreteBuilder1.prototype.producePartC = function () {
        this.product.parts.push('PartC1');
    };
    /**
     所有生产步骤都使用相同的产品实例。混凝土建造者应提供自己的检索结果的方法。这是因为各种类型的构建器可能会创建完全不同的产品，这些产品不遵循相同的
     界面。因此，不能在基本的Builder界面中声明这些方法（至少在静态类型的编程语言中）。

     通常，在将最终结果返回给客户之后，预期构建器实例将准备好开始生产另一种产品。这就是为什么通常的做法是在getProduct方法主体的末尾调用reset方法。
     但是，此行为不是强制性的，您可以让您的构建器在处置之前的结果之前，等待来自客户端代码的显式重置调用。
     */
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
var Product1 = /** @class */ (function () {
    function Product1() {
        this.parts = [];
    }
    Product1.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(', ') + "\n");
    };
    return Product1;
}());
/**
 * 主管仅负责按特定顺序执行构建步骤。根据特定的订单或配置生产产品时很有帮助。严格来说，Director类是可选的，因为客户端可以直接控制构建器。
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    /**Director与客户端代码传递给它的任何构建器实例一起使用。这个组装的产品。*/
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /**
     Director可以使用相同的构建步骤构建多个产品变体。
     */
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
/**
 *客户端代码创建一个构建器对象，将其传递给控制器，然后启动构建过程。从构建器对象检索最终结果。
 */
function clientCode(director) {
    var builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('Standard basic product: 标准基本产品');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product: 标准全功能产品');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    // 请记住，可以在没有Director类的情况下使用Builder模式。
    console.log('Custom product: 定制产品');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
