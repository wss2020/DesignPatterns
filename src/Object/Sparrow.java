package Object;


 interface Flyable {
    void fly();
}

 interface Tweetable {
    void tweet();
}

 interface EggLayable {
    void layEgg();
}

 class Ostrich implements Tweetable, EggLayable {//鸵鸟

    //... 省略其他属性和方法...
    @Override
    public void tweet() { //...
    }

    @Override
    public void layEgg() { //...
    }
}

public class Sparrow implements Flayable,Tweetable,EggLayable {//麻雀

    //... 省略其他属性和方法...
    @Override
    public void fly() {
        //...
    }

    @Override
    public void tweet() {
        //...
    }

    @Override
    public void layEgg() {
        //...
    }
}
