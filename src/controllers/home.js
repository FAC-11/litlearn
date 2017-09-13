//activePage for potential future functionality
const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

  const sqlQuery = `SELECT questions.id FROM questions;`;

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
      res.render('home', {
//activePage for potential future functionality
        activePage: {
          home: true
        },
        data: queryResult.rows
      });
    })
    .catch((queryResult, text) => {
      res.status(500);
      return next();
    });
};
