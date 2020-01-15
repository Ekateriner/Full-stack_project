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

    public String get(long id, long page) {
        String text = repo.getPage(id, page);
        if (text == null) {
            text = "Конец";
        }
        return text;
    }

    public List<Book> AllBooks() {
        return repo.findAll();
    }

    public List<Book> UserBooks(long id) {
        return repo.findBooksByUser(id);
    }
}
