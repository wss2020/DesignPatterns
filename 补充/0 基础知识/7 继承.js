
/**
    Java 语言使用 extends 关键字来实现继承。被继承的类叫作父类，继承类叫作子类。子类继承父类的所有非 private 属性和方法。
 具体的代码示例如下所示：


 public class Animal { // 父类
  protected int age;
  protected int weight;

  public Animal(int age, int weight) {
    this.age = age;
    this.weight = weight;
  }

  public int getAge() { // 函数或者方法
    return age;
  }

  public int getWeigt() {
    return weight;
  }

  public void run() {
    // ...
  }
}

 public class Dog extends Animal { // 子类
  public Dog(int age, int weight) { // 构造函数
    super(age, weight); //调用父类的构造函数
  }

  public void wangwang() {
    //...
  }
}

 public class Cat extends Animal { //子类
  public Cat(int age, int weight) { // 构造函数
    super(age, weight); //调用父类的构造函数
  }

  public void miaomiao() {
    //...
  }
}

 //使用举例
 Dog dog = new Dog(2, 8);
 dog.run();
 dog.wangwang();
 Cat cat = new Cat(1, 3);
 cat.run();
 cat.miaomiao();

 */