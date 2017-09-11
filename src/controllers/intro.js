exports.get = (req, res) => {
  res.render('intro', {activePage:{intro:true}});
}
