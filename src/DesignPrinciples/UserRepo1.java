package DesignPrinciples;

public class UserService {
    private UserRepo userRepo;//通过依赖注入或者IOC框架注入

    public User login(String email, String password) {
        if (!EmailValidation.validate(email)) {
            // ... throw InvalidEmailException...
        }
        if (!PasswordValidation.validate(password)) {
            // ... throw InvalidPasswordException...
        }
        User user = userRepo.getUserByEmail(email);
        if (user == null || !password.equals(user.getPassword()) {
            // ... throw AuthenticationFailureException...
        }
        return user;
    }
}

public class UserRepo1 {
    public boolean checkIfUserExisted(String email, String password) {
        //...query db to check if email&password exists
    }

    public User getUserByEmail(String email) {
        //...query db to get user by email...
    }
}
