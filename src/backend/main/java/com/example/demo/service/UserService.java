package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public List<User> getAll() {
        return repo.findAll();
    }

    public User get(String Email, String Password) throws AuthenticationException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (Email != null && Password != null) {
            User getting = repo.findUserByEmail(Email);
            if (getting != null && passwordEncoder.matches(Password, getting.getHash())) {
                return getting;
            }
        }
        throw new AuthenticationException("Invalid email or password");
    }

    public User Add(String name, String surname, String email, String login, String password) throws AuthenticationException {
        if (email.length() == 0 || login.length() == 0 || password.length() == 0) {
            throw new AuthenticationException("Email, login or password are not filled out");
        }

        if (!check(email)) {
            throw new AuthenticationException("Email incorrect format");
        }

        User new_user = new User(login, email, password);
        if (name != null && name != "") {
            new_user.setName(name);
        }

        if (surname != null && surname != "") {
            new_user.setSurname(surname);
        }

        repo.save(new_user);

        return new_user;
    }

    private boolean check(String Email) {
        return Pattern.matches("^[\\w.]+@[a-z]+\\.[a-z]+$", Email);
    }
}