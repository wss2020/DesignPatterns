package test;


public class Dog1 {// public修饰类
    private int age; // private修饰属性，只能在类内部使用
    private int weight;

    public Dog1(int age, int weight) {
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