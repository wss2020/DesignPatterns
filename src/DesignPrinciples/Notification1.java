package DesignPrinciples;


public class Notification1 {
    private MessageSender messageSender;

    public Notification(MessageSender messageSender) {
        this.messageSender = messageSender;
    }

    public void sendMessage(String cellphone, String message) {
        this.messageSender.send(cellphone, message);
    }
}

public interface MessageSender {
    void send(String cellphone, String message);
}

// 短信发送类
public class SmsSender implements MessageSender {
    @Override
    public void send(String cellphone, String message) {
        //....
    }
}

// 站内信发送类
public class InboxSender implements MessageSender {
    @Override
    public void send(String cellphone, String message) {
        //....
    }
}


//使用Notification
MessageSender messageSender = new SmsSender();
Notification notification = new Notification(messageSender);
