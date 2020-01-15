package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity(name="Books")
@Data
public class Book {
    @Id
    @GeneratedValue
    @Column(name = "Book_id", updatable = false, nullable = false)
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

    public Book() {};

    public Book(String Name, Author author){
        this.name = Name;
        this.primaryAuthor = author;
    }

    // GET

    public long getBook_id() {
        return book_id;
    }

    public String getName() {
        return name;
    }

    public String getAnnotation() {
        return annotation;
    }

    public Author getPrimaryAuthor() {
        return primaryAuthor;
    }

    public Collection<Page> getPages() {
        return pages;
    }

    // SET

    public void setAnnotation(String annotation) {
        this.annotation = annotation;
    }
}
