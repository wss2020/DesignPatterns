package DesignPrinciples;

public abstract class TestCase {
    public void run() {
        if (doTest()) {
            System.out.println("Test succeed.");
        } else {
            System.out.println("Test failed.");
        }
    }

    public abstract boolean doTest();
}

public class JunitApplication {
    private static final List<TestCase> testCases = new ArrayList<>();

    public static void register(TestCase testCase) {
        testCases.add(testCase);
    }

    public static final void main(String[] args) {
        for (TestCase case: testCases) {
            case.run();
        }
    }
}