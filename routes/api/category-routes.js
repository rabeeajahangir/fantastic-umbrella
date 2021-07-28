const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// GET /api/category
router.get('/', (req, res) => {
  Category.findAll()
    .then(CategoryData => res.json(CategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET /api/category/1
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(CategoryData => {
    if(!CategoryData) {
      res.status(404).json({message: 'No user found with this id'});
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

//POST /api/category
router.post('/', (req, res) => {
 Category.create({
   category_name: req.body.category_name,
 })
 .then(CategoryData => res.json(CategoryData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err);
 });
});


//PUT /api/category/1
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(CategoryData => {
    if (!CategoryData[0]){
      res.status(404).json({ message: 'No category found with this id'})
  return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


//DELETE /api/category/1
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(TagData => {
    if (!TagData) {
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    res.json(TagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;
