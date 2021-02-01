package Object;


// 抽象类
public abstract class Logger {
    private String name;
    private boolean enabled;
    private Level minPermittedLevel;

    public Logger(String name, boolean enabled, Level minPermittedLevel) {
        this.name = name;
        this.enabled = enabled;
        this.minPermittedLevel = minPermittedLevel;
    }

    public void log(Level level, String message) {
        boolean loggable = enabled && (minPermittedLevel.intValue() <= level.intValue());
        if (!loggable) return;
        doLog(level, message);
    }

    protected abstract void doLog(Level level, String message);
}

// 抽象类的子类：输出日志到文件
public class FileLogger extends Logger {
    private Writer fileWriter;

    public FileLogger(String name, boolean enabled,
                      Level minPermittedLevel, String filepath) {
        super(name, enabled, minPermittedLevel);
        this.fileWriter = new FileWriter(filepath);
    }

    @Override
    public void doLog(Level level, String mesage) {
        // 格式化level和message,输出到日志文件
        fileWriter.write(...);
    }
}
// 抽象类的子类: 输出日志到消息中间件(比如kafka)
public class MessageQueueLogger extends Logger {
    private MessageQueueClient msgQueueClient;

    public MessageQueueLogger(String name, boolean enabled,
                              Level minPermittedLevel, MessageQueueClient msgQueueClient) {
        super(name, enabled, minPermittedLevel);
        this.msgQueueClient = msgQueueClient;
    }

    @Override
    protected void doLog(Level level, String mesage) {
        // 格式化level和message,输出到消息中间件
        msgQueueClient.send(...);
    }
}


public class HowDefineAbstract {
}
