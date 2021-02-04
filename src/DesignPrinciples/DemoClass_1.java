package DesignPrinciples;


public interface Serializable {
    String serialize(Object object);
}

public interface Deserializable {
    Object deserialize(String text);
}

public class Serialization implements Serializable, Deserializable {
    @Override
    public String serialize(Object object) {
        String serializedResult = ...;
    ...
        return serializedResult;
    }

    @Override
    public Object deserialize(String str) {
        Object deserializedResult = ...;
    ...
        return deserializedResult;
    }
}

public class DemoClass_1 {
    private Serializable serializer;

    public Demo(Serializable serializer) {
        this.serializer = serializer;
    }
    //...
}

public class DemoClass_2 {
    private Deserializable deserializer;

    public Demo(Deserializable deserializer) {
        this.deserializer = deserializer;
    }
    //...
}
