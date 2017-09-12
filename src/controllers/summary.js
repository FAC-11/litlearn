exports.get = (req, res) => {
  res.render('summary', {activePage:{summary:true}});
}
