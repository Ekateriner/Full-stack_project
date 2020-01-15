package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository repo;

    public Book get(long id) {
        return repo.getOne(id);
    }

    public List<Book> AllBooks() {
        return repo.findAll();
    }
}
