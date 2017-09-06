const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

  // may need updating after testing!
  const sqlQuery = `SELECT questions.questioncontent, questions.hint, extracts.extractcontent FROM questions INNER JOIN extracts ON questions.small_extract_id = extracts.id WHERE questions.id=${req.params.number}`;

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
      res.render('multichoice', {
        activePage: {
          multichoice: true
        },
        data: queryResult.rows[0]
      });
    })
    .catch((queryResult, text) => {
      res.status(500);
      return next();
    });
};
