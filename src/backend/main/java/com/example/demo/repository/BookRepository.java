package com.example.demo.repository;

import com.example.demo.model.Book;
import com.example.demo.model.Page;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query(value = "select b.BOOK_ID, NAME, ANNOTATION, AUTHOR_ID " +
            "from LIBRARY l join BOOKS b on l.BOOK_ID = b.BOOK_ID " +
            "where l.USER_ID=?1",
            nativeQuery = true)
    List<Book> findBooksByUser(long id);

    @Query(value = "select p.TEXT " +
            "from PAGES p "+
            "where BOOK_ID=?1 and p.PAGE=?2 ",
            nativeQuery = true)
    String getPage(long id, long page);
}
