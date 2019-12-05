package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity(name="Authors")
@Data
public class Author {
    @Id
    long author_id;

    @Column(name="Name")
    String name;

    @Column(name="Biography")
    String biography;

//    @OneToMany(mappedBy = "primaryAuthor", fetch = FetchType.EAGER)
//    private Collection<Book> author_books;
}