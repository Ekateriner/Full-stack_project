DROP TABLE IF EXISTS  Users;
DROP TABLE IF EXISTS  Authors;
DROP TABLE IF EXISTS  Books;
DROP TABLE IF EXISTS  Library;

CREATE TABLE IF NOT EXISTS Users (
    User_id int not null,
    Login varchar(25),
    User_name varchar(25),
    Hash_pass int not null,
    Salt varchar(16) not null,
    primary key (User_id)
);

CREATE TABLE IF NOT EXISTS Authors (
    Author_id int not null,
    Name varchar(25),
    Description varchar (100),
    primary key (Author_id)
);

CREATE TABLE IF NOT EXISTS Books (
    Book_id int not null,
    Name varchar(25),
    Annotation varchar(100),
    Author_id int not null,
    primary key (Book_id)
);

CREATE TABLE IF NOT EXISTS Library (
    User_id int not null,
    Book_id int not null
);

CREATE TABLE IF NOT EXISTS Inner (
    Book_id int not null,
    Page int not null,
    Text varchar(100),
    Picture ,
    Atmosphere ,

)

INSERT INTO Users(User_id, Login, Hash_pass, Salt) VALUES
    (1, 'Anna', 12, 'a'),
    (2, 'Elsa', 94, 'b');