package SpecificationAndRefactoring;


public class Assert {
    public static void assertEquals(Integer expectedValue, Integer actualValue) {
        if (actualValue != expectedValue) {
            String message = String.format(
                    "Test failed, expected: %d, actual: %d.", expectedValue, actualValue);
            System.out.println(message);
        } else {
            System.out.println("Test succeeded.");
        }
    }

    public static boolean assertNull(Integer actualValue) {
        boolean isNull = actualValue == null;
        if (isNull) {
            System.out.println("Test succeeded.");
        } else {
            System.out.println("Test failed, the value is not null:" + actualValue);
        }
        return isNull;
    }
}

public class TestCaseRunner {
    public static void main(String[] args) {
        System.out.println("Run testToNumber()");
        new TextTest().testToNumber();

        System.out.println("Run testToNumber_nullorEmpty()");
        new TextTest().testToNumber_nullorEmpty();

        System.out.println("Run testToNumber_containsLeadingAndTrailingSpaces()");
        new TextTest().testToNumber_containsLeadingAndTrailingSpaces();

        System.out.println("Run testToNumber_containsMultiLeadingAndTrailingSpaces()");
        new TextTest().testToNumber_containsMultiLeadingAndTrailingSpaces();

        System.out.println("Run testToNumber_containsInvalidCharaters()");
        new TextTest().testToNumber_containsInvalidCharaters();
    }
}


public class Text {
    private String content;

    public Text(String content) {
        this.content = content;
    }

    /**
     * 将字符串转化成数字，忽略字符串中的首尾空格；
     * 如果字符串中包含除首尾空格之外的非数字字符，则返回null。
     */
    public Integer toNumber() {
        if (content == null || content.isEmpty()) {
            return null;
        }
        //...省略代码实现...
        return null;
    }
}

public class TextTest {
    public void testToNumber() {
        Text text = new Text("123");
        Assert.assertEquals(123, text.toNumber());
    }

    public void testToNumber_nullorEmpty() {
        Text text1 = new Text(null);
        Assert.assertNull(text1.toNumber());

        Text text2 = new Text("");
        Assert.assertNull(text2.toNumber());
    }

    public void testToNumber_containsLeadingAndTrailingSpaces() {
        Text text1 = new Text(" 123");
        Assert.assertEquals(123, text1.toNumber());

        Text text2 = new Text("123 ");
        Assert.assertEquals(123, text2.toNumber());

        Text text3 = new Text(" 123 ");
        Assert.assertEquals(123, text3.toNumber());
    }

    public void testToNumber_containsMultiLeadingAndTrailingSpaces() {
        Text text1 = new Text("  123");
        Assert.assertEquals(123, text1.toNumber());

        Text text2 = new Text("123  ");
        Assert.assertEquals(123, text2.toNumber());

        Text text3 = new Text("  123  ");
        Assert.assertEquals(123, text3.toNumber());
    }

    public void testToNumber_containsInvalidCharaters() {
        Text text1 = new Text("123a4");
        Assert.assertNull(text1.toNumber());

        Text text2 = new Text("123 4");
        Assert.assertNull(text2.toNumber());
    }
}
