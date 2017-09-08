exports.get = (req, res) => {
  res.render('congratulations', {activePage:{congratulations:true}});
}
