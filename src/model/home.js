const home = (req, res) => {
  res.render('home', { activePage: { home: true } });
}

module.exports = home;
