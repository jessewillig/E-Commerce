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
        through: ProductTag,
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
  try {
    const productCat = await Category.findOne(req.params.id, {
      include: [{ model: Product, through: Tag, as: "productCat" }],
    });
    
    if (!productCat) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(productCat);
  } catch (err) {
    res.status(500).json(err);
  }
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
