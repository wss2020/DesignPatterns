package DesignPrinciples;


public interface Config {
    void update();

    String outputInPlainText();

    Map<String, String> output();
}

public class RedisConfig implements Config {
    //...需要实现Config的三个接口update/outputIn.../output
}

public class KafkaConfig implements Config {
    //...需要实现Config的三个接口update/outputIn.../output
}

public class MysqlConfig implements Config {
    //...需要实现Config的三个接口update/outputIn.../output
}

public class ScheduledUpdater {
    //...省略其他属性和方法..
    private Config config;

    public ScheduleUpdater(Config config, long initialDelayInSeconds, long periodInSeconds) {
        this.config = config;
        //...
    }
    //...
}

public class SimpleHttpServer {
    private String host;
    private int port;
    private Map<String, List<Config>> viewers = new HashMap<>();

    public SimpleHttpServer(String host, int port) {
    }

    public void addViewer(String urlDirectory, Config config) {
        if (!viewers.containsKey(urlDirectory)) {
            viewers.put(urlDirectory, new ArrayList<Config>());
        }
        viewers.get(urlDirectory).add(config);
    }

    public void run() {
    }
}
