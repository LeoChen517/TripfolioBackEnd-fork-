const getPing = (req, res) => {
  res.status(200).send('pong');
};

module.exports = {
  getPing,
};
