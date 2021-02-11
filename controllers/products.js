const { DATA } = require('../data');
exports.getProducts = (req, res, next) => {
  res.json(DATA);
};