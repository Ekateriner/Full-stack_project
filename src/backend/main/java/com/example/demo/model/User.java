package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity(name="Users")
@Data
public class User {
    @Id
    @GeneratedValue
    @Column(name = "User_id", updatable = false, nullable = false)
    long User_id;

    @Column(name="Login")
    String Login;

    @Column(name="Name")
    String Name;

    @Column(name="Surname")
    String Surname;

    @Column(name="Email")
    String Email;

    @Column(name="Hash_pass")
    String Hash;

    @ManyToMany(mappedBy = "users")
    private Collection<Book> books;

    public User () {};

    public User (String Login, String Email, String Password) {
        this.Login = Login;
        this.Email = Email;

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        this.Hash = passwordEncoder.encode(Password);

        this.Name = "";
        this.Surname = "";
    }

    // GET

    public long getUser_id() {
        return User_id;
    }

    public String getLogin() {
        return Login;
    }

    public String getName() {
        return Name;
    }

    public String getSurname() {
        return Surname;
    }

    public String getEmail() {
        return Email;
    }

    public String getHash() {
        return Hash;
    }

    public Collection<Book> getBooks() {
        return books;
    }

    // SET

    public void setName(String name) {
        Name = name;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }
}
