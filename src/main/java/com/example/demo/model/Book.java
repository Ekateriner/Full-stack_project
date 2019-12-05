package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity(name="Books")
@Data
public class Book {
    @Id
    long book_id;

    @Column(name="Name")
    String name;

    @Column(name="Annotation")
    String annotation;

    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name="Author_id")
    private Author primaryAuthor;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name="Library",
               joinColumns = @JoinColumn(name="Book_id"),
               inverseJoinColumns = @JoinColumn(name="User_id")
    )
    private Collection<User> users;

    @OneToMany(mappedBy = "primaryBook", fetch = FetchType.EAGER)
    private Collection<Page> pages;
}
