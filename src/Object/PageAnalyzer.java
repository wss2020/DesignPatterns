package Object;


public class Url {
    //...省略属性和方法
}

public class Crawler {
    private Url url; // 组合
    public Crawler() {
        this.url = new Url();
    }
    //...
}

public class PageAnalyzer {
    private Url url; // 组合
    public PageAnalyzer() {
        this.url = new Url();
    }
    //..
}
