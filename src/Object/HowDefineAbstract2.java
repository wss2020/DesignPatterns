package Object;


public class Logger {
    // ...省略部分代码...
    public void log(Level level, String mesage) { // do nothing... }
    }

    public class FileLogger extends Logger {
        // ...省略部分代码...
        @Override
        public void log(Level level, String mesage) {
            if (!isLoggable()) return;
            // 格式化level和message,输出到日志文件
            fileWriter.write(...);
        }
    }

    public class MessageQueueLogger extends Logger {
        // ...省略部分代码...
        @Override
        public void log(Level level, String mesage) {
            if (!isLoggable()) return;
            // 格式化level和message,输出到消息中间件
            msgQueueClient.send(...);
        }
    }
}


public class HowDefineAbstract2 {
}
