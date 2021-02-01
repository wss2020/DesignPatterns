package Object;


public class FeignClient { // Feign Client框架代码
    //...省略其他代码...
    public void encode(String url) { //...
    }
}

public void demofunction(FeignClient feignClient) {
    //...
    feignClient.encode(url);
    //...
}

public class CustomizedFeignClient extends FeignClient {
    @Override
    public void encode(String url) { //...重写encode的实现...
    }
}

    // 调用
    FeignClient client = new CustomizedFeignClient();
    demofunction(client);
