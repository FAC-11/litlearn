const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

  // may need updating after testing!
  const sqlQuery = `SELECT questions.questioncontent, questions.options, questions.id, questions.hint, extracts.extractcontent FROM questions INNER JOIN extracts ON questions.small_extract_id = extracts.id WHERE questions.id=$1`;
  const params = [req.params.number];

  const showData = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(sqlQuery, params,
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
      queryResult.rows[0].options = JSON.parse(queryResult.rows[0].options );
      res.render('multichoice', {
        //activePage for potential future functionality
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
