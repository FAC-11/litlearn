BEGIN;

DROP TABLE IF EXISTS users, questions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  hashedPassword VARCHAR(100) NOT NULL
);

INSERT INTO users (username, hashedPassword) VALUES
  ('owen', '$2a$10$jjczKwDy/RYmdFTI.KUY0e.QToOk.fHQcBpOLpF8t8Ulg6dvy5TaW');

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  hint TEXT NOT NULL
);

INSERT INTO questions (content, hint) VALUES ('At what point <br> does Lear go crazy?','Or was he <br> always <br> a bit crazy?'),('At what point <br> does Macbeth go crazy?','Maybe it had something to do with killing his mate?');


COMMIT;
