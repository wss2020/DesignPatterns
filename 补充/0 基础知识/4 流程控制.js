/**
 流程控制语句跟其他语言类似，主要有下面几种。

 if-else 语句，代码示例如下所示：
 // 用法一
 int a;
 if (a > 1) {
  //执行代码块
} else {
  //执行代码块
}

 // 用法二
 int a;
 if (a > 1) {
  //执行代码块
 } else if (a == 1) {
  //执行代码块
 } else {
  //执行代码块
}



 for、while 循环，代码示例如下所示：

 for (int i = 0; i < 10; ++i) {
  // 循环执行10次此代码块
}

 int i = 0;
 while (i < 10) {
  // 循环执行10次此代码块
}



 continue、break、return，代码示例如下所示：


 for (int i = 0; i < 10; ++i) {
  if (i == 4) {
    continue; //跳过本次循环，不会打印出4这个值
  }
  System.out.println(i);
}

 for (int i = 0; i < 10; ++i) {
  if (i == 4) {
    break; //提前终止循环，只会打印0、1、2、3
  }
  System.out.println(i);
}

 public void func(int a) {
  if (a == 1) {
    return; //结束一个函数，从此处返回
  }
  System.out.println(a);
}











 */
















