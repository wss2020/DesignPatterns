/**
    在前面的代码示例中，我们多次用到 private、public，它们跟 protected 一起，构成了 Java 语言的三个权限修饰符。
 权限修饰符可以修饰函数、成员变量。

    private 修饰的函数或者成员变量，只能在类内部使用。
    protected 修饰的函数或者成员变量，可以在类及其子类内使用。
    public 修饰的函数或者成员变量，可以被任意访问。


 除此之外，权限修饰符还可以修饰类，不过，专栏中所有的类定义都是 public 访问权限的，所以，我们可以不用去了解三个修饰符修饰类的区别。
 对于权限修饰符的理解，我们可以参看下面的代码示例：


 public class Dog {// public修饰类
  private int age; // private修饰属性，只能在类内部使用
  private int weight;

  public Dog(int age, int weight) {
    this.age = age;
    this.weight = weight;
  }

  public int getAge() { //public修饰的方法，任意代码都是可以调用
    return age;
  }

  public void run() {
    // ...
  }

}

 */
