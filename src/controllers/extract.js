exports.get = (req, res) => {
  res.render('extract', {activePage:{extract:true}});
}

// will need to make a call to the database once database functionality is in place
