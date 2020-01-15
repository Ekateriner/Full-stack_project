package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import javax.sql.rowset.serial.SerialBlob;

@Entity(name="Pages")
@Data
public class Page {
    @Id
    @GeneratedValue
    @Column(name = "Id", updatable = false, nullable = false)
    long page_id;

    @ManyToOne()
    @JoinColumn(name="Book_id")
    private Book primaryBook;

    @Column(name="Text")
    String text;

    @Column(name="Page")
    int page_num;

    @Column(name="Picture")
    SerialBlob image;

    @Column(name="Atmosphere")
    SerialBlob sound;

    // GET

    public long getPage_id() {
        return page_id;
    }

    public Book getPrimaryBook() {
        return primaryBook;
    }

    public String getText() {
        return text;
    }

    public int getPage_num() {
        return page_num;
    }

    public SerialBlob getImage() {
        return image;
    }

    public SerialBlob getSound() {
        return sound;
    }

    // SET

    public void setText(String text) {
        this.text = text;
    }

    public void setImage(SerialBlob image) {
        this.image = image;
    }

    public void setSound(SerialBlob sound) {
        this.sound = sound;
    }
}
