package DesignPrinciples;


// 非依赖注入实现方式
public class Notification {
    private MessageSender messageSender;

    public Notification() {
        this.messageSender = new MessageSender(); //此处有点像hardcode
    }

    public void sendMessage(String cellphone, String message) {
        //...省略校验逻辑等...
        this.messageSender.send(cellphone, message);
    }
}

public class MessageSender {
    public void send(String cellphone, String message) {
        //....
    }
}

// 使用Notification
Notification notification = new Notification();






// 依赖注入的实现方式
public class Notification {
    private MessageSender messageSender;

    // 通过构造函数将messageSender传递进来
    public Notification(MessageSender messageSender) {
        this.messageSender = messageSender;
    }

    public void sendMessage(String cellphone, String message) {
        //...省略校验逻辑等...
        this.messageSender.send(cellphone, message);
    }
}

//使用Notification
MessageSender messageSender = new MessageSender();
Notification notification = new Notification(messageSender);
