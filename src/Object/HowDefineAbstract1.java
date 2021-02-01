package Object;



// 父类：非抽象类，就是普通的类. 删除了log(),doLog()，新增了isLoggable().
public class Logger {
    private String name;
    private boolean enabled;
    private Level minPermittedLevel;

    public Logger(String name, boolean enabled, Level minPermittedLevel) {
        //...构造函数不变，代码省略...
    }

    protected boolean isLoggable() {
        boolean loggable = enabled && (minPermittedLevel.intValue() <= level.intValue());
        return loggable;
    }
}
// 子类：输出日志到文件
public class FileLogger extends Logger {
    private Writer fileWriter;

    public FileLogger(String name, boolean enabled,
                      Level minPermittedLevel, String filepath) {
        //...构造函数不变，代码省略...
    }

    public void log(Level level, String mesage) {
        if (!isLoggable()) return;
        // 格式化level和message,输出到日志文件
        fileWriter.write(...);
    }
}
// 子类: 输出日志到消息中间件(比如kafka)
public class MessageQueueLogger extends Logger {
    private MessageQueueClient msgQueueClient;

    public MessageQueueLogger(String name, boolean enabled,
                              Level minPermittedLevel, MessageQueueClient msgQueueClient) {
        //...构造函数不变，代码省略...
    }

    public void log(Level level, String mesage) {
        if (!isLoggable()) return;
        // 格式化level和message,输出到消息中间件
        msgQueueClient.send(...);
    }
}


public class HowDefineAbstract1 {
}
