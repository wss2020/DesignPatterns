
/**
    Java 语言通过 interface 关键字来定义接口。接口中只能声明方法，不能包含实现，也不能定义属性。
 类通过 implements 关键字来实现接口中定义的方法。

 在专栏的第 8 讲中，我们会详细讲解接口，所以，这里我只简单介绍一下语法。具体的代码示例如下所示：


 public interface Runnable {
  void run();
}

 public class Dog implements Runnable {
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

  @Override
  public void run() { //实现接口中定义的run()方法
    // ...
  }
}
 */
































