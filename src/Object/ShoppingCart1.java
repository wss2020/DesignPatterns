package Object;


import base.Array;
import base.Iterator;
import base.LinkedList;

public class ShoppingCart {
    // ...省略其他代码...
    public List<ShoppingCartItem> getItems() {
        return Collections.unmodifiableList(this.items);
    }
}

public class UnmodifiableList<E> extends UnmodifiableCollection<E>
        implements List<E> {
    public boolean add(E e) {
        throw new UnsupportedOperationException();
    }
    public void clear() {
        throw new UnsupportedOperationException();
    }
    // ...省略其他代码...
}

public class ShoppingCart1{
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        List<ShoppingCartItem> items = cart.getItems();
        items.clear();//抛出UnsupportedOperationException异常
    }
}

