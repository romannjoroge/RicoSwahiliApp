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

CREATE TABLE Rico.scores(
    id serial,
    score int NOT NULL,
    gamemode varchar(50) NOT NULL,
    timeGotten timestamp (1) with time zone NOT NULL UNIQUE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK3 PRIMARY KEY(id)
);

-- Adding kamusi column in Rico.words table
ALTER TABLE Rico.words ADD COLUMN kamusi TEXT;
UPDATE Rico.words SET kamusi='ndugu wa kiume wa mama; kaka wa mama; hau' WHERE word='Mjomba';
UPDATE Rico.words SET kamusi='kati ya saa kumi na saa kumi na moja asubuhi' WHERE word='Alfajiri';
ALTER TABLE Rico.words ALTER COLUMN kamusi SET NOT NULL;