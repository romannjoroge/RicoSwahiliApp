CREATE TABLE Rico.test (
    id serial,
    name varchar(50) NOT NULL,
    CONSTRAINT PK1 PRIMARY KEY(id)
);

CREATE TABLE Rico.words (
    id serial,
    word varchar(255) NOT NULL UNIQUE,
    word_type varchar(20) NOT NULL,
    ngeli varchar(20) NOT NULL,
    sentence varchar(255) NOT NULL,
    meaning varchar(255) NOT NULL,
    CONSTRAINT PK2 PRIMARY KEY(id)
);