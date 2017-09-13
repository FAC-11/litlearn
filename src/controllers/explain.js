exports.get = (req, res) => {
  res.render('explain', {activePage:{explain:true}, answer: req.query.answer});
}
