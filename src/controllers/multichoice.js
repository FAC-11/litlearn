const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {
  const meh = 'meh';
  fakeData={questioncontent : meh, options: [meh,meh,meh,meh] ,id: meh, hint: meh, extractcontent : meh};

  res.render('multichoice', {
    //activePage for potential future functionality
    activePage: {
      multichoice: true
    },
    data: fakeData
  });
}
