// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Product,
    unique: false
  },
  as: 'product_catagories'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  as: 'categoriesOfProducts'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagsOfProducts'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
