const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');



// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})






// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  foreignKey: 'product_id'
})
module.exports = { Category, Product, ProductTag, Tag};
