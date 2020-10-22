const express = require('express');
const router = express.Router();
const db = require('../models');
const {ListItem} = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

//ListItems
router.get('/', (req,res) => {
  console.log('Works');
  ListItem.findAll({include: 'list'})
    .then(listItems => res.json(listItems));
});


router.post('/', (req, res) => {
  let { name, url, quantity, note } = req.body;

  ListItem.create({
    name,
    url,
    quantity,
    note
  })
    .then(listItem => {
      res.status(201).json(listItem);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(listItem => {
      if(!listItem) {
        return res.sendStatus(404);
      }

      res.json(listItem);
    });
});


router.put('/:id', (req, res) => {
  let {name, description} = req.body;
  const { id } = req.params;
  ListItem.findByPk(id)
    .then(listItem => {
      if(!listItem) {
        return res.sendStatus(404);
      }
      
      for (const data in req.body){
        listItem[data] = req.body[data];
      }

     listItem.save()
        .then(listItem => {
          res.json(listItem);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  ListItem.findByPk(id)
    .then(listItem => {
      if(!listItem) {
        return res.sendStatus(404);
      }

      listItem.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;