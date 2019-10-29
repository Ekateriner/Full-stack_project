package com.example.demo.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="USERS")
@Data
public class User {
    @Id
    long User_id;

    @Column(name="Login")
    String Login;
}
