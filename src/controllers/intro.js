const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {

// summary, questioncontent, options, hint, small_extract_id, trophy
  const sqlQuery = `SELECT questions.summary, questions.questioncontent, questions.options, questions.hint, extracts.extractcontent, questions.trophy FROM questions INNER JOIN extracts ON questions.small_extract_id = extracts.id WHERE questions.id=$1`;
  const params = [req.params.number];

  const showData = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(sqlQuery, params,
        (err, res) => {
          if (err) {
            reject(err, 'This is an error in the sqlQuery function',err);
          } else {
            resolve(res, 'response to the sqlQuery');
          }
        });
    })
  }
  showData()
    .then((queryResult, text) => {
// console.log ('Got query result:',queryResult);
// errorcheck here - does the result make sense?
      const question = {
        summary: queryResult.rows[0].summary,
        trophy: queryResult.rows[0].trophy
      }
      queryResult.rows[0].options = JSON.parse(queryResult.rows[0].options);
      const data = JSON.stringify(queryResult.rows[0]);
// console.log (data);

      res.render('intro', {
        //activePage for potential future functionality
        activePage: {
          intro: true
        },
        question,
        data
      });
    })
    .catch((queryResult, text) => {
      console.log ('Caught an error: ',queryResult);
      res.status(500);
      return next();
    });

}
