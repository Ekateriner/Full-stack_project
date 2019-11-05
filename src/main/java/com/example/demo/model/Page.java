package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import javax.sql.rowset.serial.SerialBlob;

@Entity(name="Pages")
@Data
class Page {
    @Column(name="Text")
    String text;

    @Column(name="Page")
    int page_num;

    @Column(name="Picture")
    SerialBlob image;

    @Column(name="Atmosphere")
    SerialBlob sound;

    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name="Book_id")
    private Book primaryBook;
}
