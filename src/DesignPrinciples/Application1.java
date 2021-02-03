package DesignPrinciples;


public interface Updater {
    void update();
}

public interface Viewer {
    String outputInPlainText();

    Map<String, String> output();
}

public class RedisConfig implemets Updater,Viewer {
    //...省略其他属性和方法...
    @Override
    public void update() { }

    @Override
    public String outputInPlainText() { }

    @Override
    public Map<String, String> output() { }
}

public class KafkaConfig implements Updater {
    //...省略其他属性和方法...
    @Override
    public void update() {  }
}

public class MysqlConfig implements Viewer {
    //...省略其他属性和方法...
    @Override
    public String outputInPlainText() { }

    @Override
    public Map<String, String> output() { }
}

public class SimpleHttpServer {
    private String host;
    private int port;
    private Map<String, List<Viewer>> viewers = new HashMap<>();

    public SimpleHttpServer(String host, int port) { }

    public void addViewers(String urlDirectory, Viewer viewer) {
        if (!viewers.containsKey(urlDirectory)) {
            viewers.put(urlDirectory, new ArrayList<Viewer>());
        }
        this.viewers.get(urlDirectory).add(viewer);
    }

    public void run() { }
}

public class Application {
    ConfigSource configSource = new ZookeeperConfigSource();
    public static final RedisConfig redisConfig = new RedisConfig(configSource);
    public static final KafkaConfig kafkaConfig = new KakfaConfig(configSource);
    public static final MySqlConfig mysqlConfig = new MySqlConfig(configSource);

    public static void main(String[] args) {
        ScheduledUpdater redisConfigUpdater = new ScheduledUpdater(redisConfig, 300, 300);
        redisConfigUpdater.run();

        ScheduledUpdater kafkaConfigUpdater = new ScheduledUpdater(kafkaConfig, 60, 60);
        redisConfigUpdater.run();

        SimpleHttpServer simpleHttpServer = new SimpleHttpServer(“ 127.0 .0 .1”,2389);
        simpleHttpServer.addViewer("/config", redisConfig);
        simpleHttpServer.addViewer("/config", mysqlConfig);
        simpleHttpServer.run();
    }
}