const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

  // may need updating after testing!
  const sqlQuery = `SELECT questions.questioncontent, questions.hint, extracts.extractcontent FROM questions INNER JOIN extracts ON questions.small_extract_id = extracts.id WHERE questions.id=${req.params.number}`;
  // const optionList = ['answer 1', 'answer 2', 'answer 3', 'answer 4'];
  // const selected = optionList[req.query.answer];
  const showData = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(sqlQuery,
        (err, res) => {
          if (err) {
            reject(err, 'This is an error in the sqlQuery function');
          } else {
            resolve(res, 'response to the sqlQuery');
          }
        });
    })
  }
  showData()
    .then((queryResult, text) => {
      res.render('explain', {
//activePage for potential future functionality
        activePage: {
          explain: true
        },
        // data: Object.assign(queryResult.rows[0], {options: selected})
      });
    })
    .catch((queryResult, text) => {
      res.status(500);
      return next();
    });
};
