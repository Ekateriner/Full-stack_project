package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.model.Page;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin
public class BookController {
    @Autowired
    private BookService service;

    @GetMapping(value = "/book")
    public @ResponseBody String Get(@RequestParam(name = "id")long id, @RequestParam(name = "page")long page){
        return service.get(id, page);
    }

    @GetMapping(value = "/all_books")
    public @ResponseBody Iterable<Book> Get(){
        return service.AllBooks();
    }

    @GetMapping(value = "/books")
    public @ResponseBody List<Book> User_books(@RequestParam(name = "id")long id){
        return service.UserBooks(id);
    }
}
