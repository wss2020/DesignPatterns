package test;

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

    public void run(int age) {
        // ...
        System.out.println(age);
    }

    public static void main(String []args) {
        Dog dog1 = new Dog(2, 10); //通过new关键词创建了一个Dog对象dog1
        int age = dog1.getAge();//调用dog1的getAge()方法
        dog1.run(age); //调用dog1的run()方法
    }

}


