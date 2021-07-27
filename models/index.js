const Category = require('./Category');

const User = require('./User');





// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// import models
// const Product = require('./Product');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');

// Products belongsTo Category




// Categories have many Products









// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = { Category, Product};

// Product
//   Tag,
//   ProductTag,