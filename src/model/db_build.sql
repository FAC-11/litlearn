BEGIN;

DROP TABLE IF EXISTS users, questions, extracts, tags, many2many CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  hashedPassword VARCHAR(100) NOT NULL
);

INSERT INTO users (username, hashedPassword) VALUES
  ('owen', '$2a$10$jjczKwDy/RYmdFTI.KUY0e.QToOk.fHQcBpOLpF8t8Ulg6dvy5TaW');

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  questioncontent TEXT NOT NULL,
  hint TEXT NOT NULL,
  small_extract_id INTEGER,
  trophy INTEGER
);

INSERT INTO questions (questioncontent, options, hint, small_extract_id, trophy)
  VALUES ('At what point <br> does Lear go crazy?',
              '["Monday","Tuesday","Wednesday","Thursday"]',
               'Or was he <br> always <br> a bit crazy?',
               1,1),
          ('At what point <br> does Macbeth go crazy?',
              '["After chatting with his lady",
                  "When he starts chatting to ghosts",
                  "When he has a war with some trees",
                  "When he even considered messing with that other thane who is clearly some kind of a badass"]',
               'Maybe it had something to do with killing his mate?',
               2,1);

CREATE TABLE extracts (
  id SERIAL PRIMARY KEY,
  extractcontent TEXT NOT NULL
);

INSERT INTO extracts (extractcontent) VALUES ('Stuff stuff blah'), ('Blah Blah Stuff');

COMMIT;
