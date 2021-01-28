package test;

interface Runnable {
    void run();
}

public class Dog2 implements Runnable {
    private int age; // 属性或者成员变量
    private int weight;

    public Dog2(int age, int weight) { // 构造函数
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
