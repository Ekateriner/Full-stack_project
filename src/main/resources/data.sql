DROP TABLE IF EXISTS  Users;
DROP TABLE IF EXISTS  Authors;
DROP TABLE IF EXISTS  Books;
DROP TABLE IF EXISTS  Library;

CREATE TABLE IF NOT EXISTS Users (
    User_id     int     not null    primary key auto_increment,
    Login       text    not null    unique,
    User_name   text,
    Hash_pass   int     not null,

    Salt        varchar(16)     not null
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
    Bookmark    int     not null    DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Inner (
    Id          int     not null    primary key auto_increment,
    Book_id     int     not null    references Books(Book_id),
    Page        int     not null,
    Text        text    not null ,
    Picture     blob        null,
    Atmosphere  blob        null
);

