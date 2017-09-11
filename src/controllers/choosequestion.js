const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

  const sqlQuery = `SELECT questions.summary, questions.id, string_agg(tags.tag, ', ')
 AS filter FROM questions INNER JOIN many2many ON questions.id=many2many.question_id INNER JOIN tags on many2many.tag_id = tags.id GROUP BY questions.summary, questions.id;`;

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
      res.render('choosequestion', {
//activePage for potential future functionality
        activePage: {
          choosequestion: true
        },
        data: queryResult.rows
      });
    })
    .catch((queryResult, text) => {
      res.status(500);
      return next();
    });
};
