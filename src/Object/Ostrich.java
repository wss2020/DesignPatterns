package Object;

public interface Flyable {
    void fly();
}

public interface Tweetable {
    void tweet();
}

public interface EggLayable {
    void layEgg();
}

public class FlyAbility implements Flyable {
    @Override
    public void fly() { }
}


//省略Tweetable/TweetAbility/EggLayable/EggLayAbility

public class Ostrich implements Tweetable, EggLayable {//鸵鸟
    private TweetAbility tweetAbility = new TweetAbility(); //组合
    private EggLayAbility eggLayAbility = new EggLayAbility(); //组合

    //... 省略其他属性和方法...
    @Override
    public void tweet() {
        tweetAbility.tweet(); // 委托
    }

    @Override
    public void layEgg() {
        eggLayAbility.layEgg(); // 委托
    }
}
