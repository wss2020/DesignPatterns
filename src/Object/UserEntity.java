package Object;


////////// Controller+VO(View Object)  接口层 //////////
public class UserController {
    private UserService userService; //通过构造函数或者IOC框架注入

    public UserVo getUserById(Long userId) {
        UserBo userBo = userService.getUserById(userId);
        UserVo userVo = [...convert userBo to userVo...];
        return userVo;
    }
}

public class UserVo {//省略其他属性、get/set/construct方法
    private Long id;
    private String name;
    private String cellphone;
}




////////// Service+BO(Business Object)  业务逻辑层 //////////
public class UserService {
    private UserRepository userRepository; //通过构造函数或者IOC框架注入

    public UserBo getUserById(Long userId) {
        UserEntity userEntity = userRepository.getUserById(userId);
        UserBo userBo = [...convert userEntity to userBo...];
        return userBo;
    }
}

public class UserBo {//省略其他属性、get/set/construct方法
    private Long id;
    private String name;
    private String cellphone;
}



////////// Repository+Entity  数据访问层 //////////
public class UserRepository {
    public UserEntity getUserById(Long userId) { //...
    }
}

public class UserEntity {//省略其他属性、get/set/construct方法
    private Long id;
    private String name;
    private String cellphone;
}