const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// GET /api/category
router.get('/', (req, res) => {
  // console.log('in the get route');
  Category.findAll(
    {
      include: [Product]
    }
  )
    .then(CategoryData => {
      // console.log("MY CATEGORY DATA", CategoryData);
      res.json(CategoryData)
    })
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
    },
    
      include: [Product]
  
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
 Category.create(
   req.body
 )
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
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(CategoryData => {
    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;
