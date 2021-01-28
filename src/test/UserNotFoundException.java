package test;


 class UserNotFoundException extends Exception { // 自定义一个异常
    public UserNotFoundException() {
        super();
    }

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException(String message, Throwable e) {
        super(message, e);
    }
}

 class UserService {
    private UserRepository userRepo;
    public UserService(UseRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User getUserById(long userId) throws UserNotFoundException {
        User user = userRepo.findUserById(userId);
        if (user == null) { // throw用来抛出异常
            throw new UserNotFoundException();//代码从此处返回
        }
        return user;
    }
}

 class UserController {
    private UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    public User getUserById(long userId) {
        User user = null;
        try { //捕获异常
            user = userService.getUserById(userId);
        } catch (UserNotFoundException e) {
            System.out.println("User not found: " + userId);
        } finally { //不管异常会不会发生，finally包裹的语句块总会被执行
            System.out.println("I am always printed.");
        }
        return user;
    }
}
