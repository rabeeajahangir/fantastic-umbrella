const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll()
    .then(TagData => res.json(TagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(TagData => {
        if(!TagData) {
          res.status(404).json({message: 'No tag found with this id'});
          return;
        }
        res.json(TagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    });
    
//create a new tag

    router.post('/', (req, res) => {
        Tag.create({
          tag_name: req.body.tag_name,
        })
        .then(TagData => res.json(TagData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
       
});



 // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(TagData => {
        if (!TagData[0]){
          res.status(404).json({ message: 'No tag found with this id'})
      return;
        }
        res.json(TagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


 // delete on tag by its `id` value
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
