package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity(name="Authors")
@Data
public class Author {
    @Id
    @GeneratedValue
    @Column(name = "Author_id", updatable = false, nullable = false)
    long author_id;

    @Column(name="Name")
    String name;

    @Column(name="Biography")
    String biography;

    @OneToMany(mappedBy = "primaryAuthor", fetch = FetchType.EAGER)
    private Collection<Book> Books;

    public Author() {}

    public Author(String Name) {
        this.name = Name;
    }

    // GET

    public long getAuthor_id() {
        return author_id;
    }

    public String getName() {
        return name;
    }

    public String getBiography() {
        return biography;
    }

    public Collection<Book> getBooks() {
        return Books;
    }

    // SET

    public void setBiography(String biography) {
        this.biography = biography;
    }
}