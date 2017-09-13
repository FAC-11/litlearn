module.exports = data =>
  {const min = Math.ceil(1);
  const max = Math.floor(data.length);
  return Math.floor(Math.random() * (max - min + 1)) + min};
