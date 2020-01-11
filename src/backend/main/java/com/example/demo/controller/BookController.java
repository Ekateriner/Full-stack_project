package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.model.Page;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookService service;

    @GetMapping(value = "/book")
    public Collection<Page> Get(@RequestParam(name = "id")long id){
        Book book = service.get(id);
        return book.getPages();
    }
    @GetMapping(value = "/all_books")
    public List<Book> Get(){
        return service.AllBooks();
    }
}