
/**
    Java 通过 package 关键字来分门别类地组织类，通过 import 关键字来引入类或者 package。具体的代码示例如下所示：


 /*class DemoA*/
package com.xzg.cd; // 包名com.xzg.cd

public class DemoA {
    //...
}

/*class DemoB*/
package com.xzg.alg;

import java.util.HashMap; // Java工具包JDK中的类
import java.util.Map;
import com.xzg.cd.DemoA;

public class DemoB {
    //...
}
 */