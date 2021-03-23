const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      Product,
      {
        model: Product,
      },
    ],
  })
    .then((categories) => res.json(categories))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      Product,
      {
        model: Product,
      },
    ],
  }) .then((categories) => res.json(categories))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
