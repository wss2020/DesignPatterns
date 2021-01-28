/**
    Java 语言使用关键词 class 来定义一个类，类中包含成员变量（也叫作属性）和方法（也叫作函数），其中有一种特殊的函数叫作构造函数，
 其命名比较固定，跟类名相同。除此之外，Java 语言通过 new 关键词来创建一个类的对象，并且可以通过构造函数，初始化一些成员变量的值。
 代码示例如下所示：


 public class Dog { // 定义了一个Dog类
  private int age; // 属性或者成员变量
  private int weight;

  public Dog(int age, int weight) { // 构造函数
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

 Dog dog1 = new Dog(2, 10);//通过new关键词创建了一个Dog对象dog1
 int age = dog1.getAge();//调用dog1的getAge()方法
 dog1.run();//调用dog1的run()方法

 test/Dog

 */