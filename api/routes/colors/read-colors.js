const knex = require('../../knex/knex');
const boom = require('boom');
const { camelizeKeys } = require('humps');

const getColors = (_req, res, next) => {
  knex('colors')
    .then((rows) => {
      const colors = camelizeKeys(rows);
      res.send(colors);
    })
    .catch((err) => {
      next(err);
    });
};

const getColorById = (req, res, next) => {
  const id = Number.parseInt(req.params.id);
  
  if (Number.isNaN(id)) return next();
  
  knex('colors')
    .where('id', id)
    .first()
    .then((rows) => {
      if (!rows) throw boom.create(404, 'Not Found');

      const color = camelizeKeys(rows);

      res.send(color);
    })
    .catch((err) => {
      next(err);
    });
};

const getColorByHue = (req, res, next) => {
  const { color } = req.body;

  knex('colors')
    .where('color', color)
    .then((rows) => {
      if (!rows) throw boom.create(404, 'Not Found');

      const color = camelizeKeys(rows);

      res.send(color);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getColors,
  getColorById,
  getColorByHue
}