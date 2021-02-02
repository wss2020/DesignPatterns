package DesignPrinciples;


public class Alert {
    // 代码未改动... }
}

public class ApiStatInfo {//省略constructor/getter/setter方法
    private String api;
    private long requestCount;
    private long errorCount;
    private long durationOfSeconds;
    private long timeoutCount; // 改动一：添加新字段
}

public abstract class AlertHandler1 {
    //代码未改动...
}

public class TpsAlertHandler extends AlertHandler {
    //代码未改动...
}

public class ErrorAlertHandler extends AlertHandler {
    //代码未改动...
}

// 改动二：添加新的handler
public class TimeoutAlertHandler extends AlertHandler {
    //省略代码...
}

public class ApplicationContext {
    private AlertRule alertRule;
    private Notification notification;
    private Alert alert;

    public void initializeBeans() {
        alertRule = new AlertRule(/*.省略参数.*/); //省略一些初始化代码
        notification = new Notification(/*.省略参数.*/); //省略一些初始化代码
        alert = new Alert();
        alert.addAlertHandler(new TpsAlertHandler(alertRule, notification));
        alert.addAlertHandler(new ErrorAlertHandler(alertRule, notification));
        // 改动三：注册handler
        alert.addAlertHandler(new TimeoutAlertHandler(alertRule, notification));
    }
    //...省略其他未改动代码...
}

public class Demo {
    public static void main(String[] args) {
        ApiStatInfo apiStatInfo = new ApiStatInfo();
        // ...省略apiStatInfo的set字段代码
        apiStatInfo.setTimeoutCount(289); // 改动四：设置tiemoutCount值
        ApplicationContext.getInstance().getAlert().check(apiStatInfo);
    }
}








