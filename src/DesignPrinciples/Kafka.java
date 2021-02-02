package DesignPrinciples;



// 这一部分体现了抽象意识
public interface MessageQueue { }
public class KafkaMessageQueue implements MessageQueue { ...}
public class RocketMQMessageQueue implements MessageQueue {...}

public interface MessageFromatter { ...}
public class JsonMessageFromatter implements MessageFromatter {...}
public class ProtoBufMessageFromatter implements MessageFromatter {...}

public class Kafka {
    private MessageQueue msgQueue; // 基于接口而非实现编程

    public Demo(MessageQueue msgQueue) { // 依赖注入
        this.msgQueue = msgQueue;
    }

    // msgFormatter：多态、依赖注入
    public void sendNotification(Notification notification, MessageFormatter msgFormatter) {
        //...
    }
}