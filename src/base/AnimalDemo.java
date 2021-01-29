
class Animal { // 父类
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
        System.out.println("run");
    }


}

class Dog extends Animal { // 子类
    public Dog(int age, int weight) { // 构造函数
        super(age, weight); //调用父类的构造函数
    }

    public void wangwang() {
        System.out.println("wangwang");
    }
}

class Cat extends Animal { //子类
    public Cat(int age, int weight) { // 构造函数
        super(age, weight); //调用父类的构造函数
    }

    public void miaomiao() {
        System.out.println("miaomiao");
    }
}


public class AnimalDemo {
    public static void main(String[] args) {
        //使用举例
        Dog dog = new Dog(2, 8);
        dog.run();
        dog.wangwang();

        Cat cat = new Cat(1, 3);
        cat.run();
        cat.miaomiao();
    }
}