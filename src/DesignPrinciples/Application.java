package DesignPrinciples;


public interface Updater {
    void update();
}

public class RedisConfig implemets Updater {
    //...省略其他属性和方法...
    @Override
    public void update() {
    }
}

public class KafkaConfig implements Updater {
    //...省略其他属性和方法...
    @Override
    public void update() {
    }
}

public class MysqlConfig {
    //...省略其他属性和方法...
}

public class ScheduledUpdater {
    private final ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();
    ;
    private long initialDelayInSeconds;
    private long periodInSeconds;
    private Updater updater;

    public ScheduleUpdater(Updater updater, long initialDelayInSeconds, long periodInSeconds) {
        this.updater = updater;
        this.initialDelayInSeconds = initialDelayInSeconds;
        this.periodInSeconds = periodInSeconds;
    }

    public void run() {
        executor.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
                updater.update();
            }
        }, this.initialDelayInSeconds, this.periodInSeconds, TimeUnit.SECONDS);
    }
}

public class Application {
    ConfigSource configSource = new ZookeeperConfigSource(/*省略参数*/);
    public static final RedisConfig redisConfig = new RedisConfig(configSource);
    public static final KafkaConfig kafkaConfig = new KakfaConfig(configSource);
    public static final MySqlConfig mysqlConfig = new MysqlConfig(configSource);

    public static void main(String[] args) {
        ScheduledUpdater redisConfigUpdater = new ScheduledUpdater(redisConfig, 300, 300);
        redisConfigUpdater.run();

        ScheduledUpdater kafkaConfigUpdater = new ScheduledUpdater(kafkaConfig, 60, 60);
        redisConfigUpdater.run();
    }
}