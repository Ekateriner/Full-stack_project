DROP TABLE IF EXISTS  Users;
DROP TABLE IF EXISTS  Authors;
DROP TABLE IF EXISTS  Books;
DROP TABLE IF EXISTS  Library;
DROP TABLE IF EXISTS  Pages;

CREATE TABLE IF NOT EXISTS Users (
    User_id     int     not null    primary key auto_increment,
    Login       text    not null,
    Name        text,
    Surname     text,
    Email       varchar(40)  not null    unique,

    Hash_pass   varchar(60)  not null,
);

CREATE TABLE IF NOT EXISTS Authors (
    Author_id   int     not null    primary key auto_increment,
    Name        text    not null,
    Biography   text        null
);

CREATE TABLE IF NOT EXISTS Books (
    Book_id     int     not null    primary key auto_increment,
    Name        text    not null,
    Annotation  text        null,
    Author_id   int     not null    references Authors(Author_id)
);

CREATE TABLE IF NOT EXISTS Library (
    Id          int     not null    primary key auto_increment,
    User_id     int     not null    references Users(User_id),
    Book_id     int     not null    references Books(Book_id),
    Bookmark    int         null
);

CREATE TABLE IF NOT EXISTS Pages (
    page_id     int     not null    primary key auto_increment,
    Page        int     not null,
    Text        varchar(10000)    not null,
    Picture     blob        null,
    Atmosphere  blob        null,
    Book_id     int     not null    references Books(Book_id),
);