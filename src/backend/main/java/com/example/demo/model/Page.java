package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import javax.sql.rowset.serial.SerialBlob;

@Entity(name="Pages")
@Data
class Page {
    @Id
    long author_id;

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
}
