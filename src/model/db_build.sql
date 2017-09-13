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
  summary TEXT NOT NULL,
  options TEXT,
  hint TEXT NOT NULL,
  small_extract_id INTEGER,
  trophy INTEGER
);

INSERT INTO questions (summary, questioncontent, options, hint, small_extract_id, trophy)
  VALUES
  ('an Edgar Allen Poe story opening','This extract is the opening of a story by Edgar Allen Poe. Which word do you feel best describes the atmosphere of this scene?', '["miserable", "happy", "creepy", "tense"]', 'How does the writer describe the weather? What mood does that create?', 1, 1),
  ('a 19th Century theatre review','This extract is written by someone reviewing a play. What seems to be their opinion of it?', '["They love it", "They mostly like it", "They mostly dislike it", "They hate it"]', 'How much of the dialogue does the reviewer say is good and how much do they say is bad writing?', 2, 1),
  ('a scene between Benvolio and Tybalt', 'What is the relationship between Benvolio and Tybalt in this scene?', '["They are good friends", "Tybalt wants to fight", "Benvolio wants to fight", "They both want to fight"]', 'Both men give an instruction to the other. What does each one say?', 3, 2);

CREATE TABLE extracts (
  id SERIAL PRIMARY KEY,
  extractcontent TEXT NOT NULL
);

INSERT INTO extracts (extractcontent) VALUES ('During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country; and at length found myself, as the shades of the evening drew on, within view of the melancholy House of Usher. I know not how it was -- but, with the first glimpse of the building, a sense of insufferable gloom pervaded my spirit.'), ('The dialogue is often good. At the end of the first act it is as salt* and rapid as good comedy dialogue should be. Elsewhere it is several times forced and tedious beyond expression, and in the third act one long passage of highly worked-up witticisms, during the delivery of which the action makes almost a dead halt, is intolerably artificial in its own substance and still more in the crude and unprepared manner of its introduction. *salt = rude'), ('Tybalt: What, art thou drawn among these heartless hinds? <br>Turn thee, Benvolio, look upon thy death. <br>Benvolio: I do but keep the peace: put up thy sword,<br>Or manage it to part these men with me.');

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  tag_type VARCHAR(30) NOT NULL,
  tag VARCHAR(30) NOT NULL
);

INSERT INTO tags (tag_type, tag) VALUES ('subject', 'Language'), ('subject', 'Literature'), ('board', 'AQA'), ('board','EDEXCEL'), ('board','EDUQAS'), ('board','OCR'), ('skill','Inference'), ('skill','Analysis'), ('skill','Evaluation'), ('age','19th C'), ('age','20th C'), ('age','21st C'), ('text', 'Fiction'), ('text', 'Non-fiction'), ('text', 'Romeo and Juliet'), ('text', 'Macbeth'), ('text', 'Frankenstein');

CREATE TABLE many2many (
  question_id INTEGER REFERENCES questions,
  tag_id INTEGER REFERENCES tags
);

INSERT INTO many2many (question_id, tag_id) VALUES
  (1,1), (1,4), (1,8), (1,10), (1,13),
  (2,1), (2,3), (2,5), (2,6), (2,7), (2,10), (2,14),
  (3,2), (3,3), (3,4),(3,5), (3,6), (3,8), (3,15);

COMMIT;
