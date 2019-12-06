package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity(name="Users")
@Data
public class User {
    @Id
    long User_id;

    @Column(name="Login")
    String Login;

    @Column(name="Name")
    String Name;

    @ManyToMany(mappedBy = "users")
    private Collection<Book> books;
}
