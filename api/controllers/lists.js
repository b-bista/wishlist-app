const express = require('express');
const router = express.Router();
const db = require('../models');
const {List} = db;

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

//Lists
router.get('/', (req,res) => {
  List.findAll({include: 'listItems'})
    .then(lists => res.json(lists));
});


router.post('/', (req, res) => {
  let { name, description } = req.body;

  List.create({
    name,
    description
  })
    .then(list => {
      res.status(201).json(list);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(list => {
      if(!list) {
        return res.sendStatus(404);
      }

      res.json(list);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  List.findByPk(id)
    .then(list => {
      if(!list) {
        return res.sendStatus(404);
      }

      for (const data in req.body){
        list[data] = req.body[data];
      }

     list.save()
        .then(list => {
          res.json(list);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  List.findByPk(id)
    .then(list => {
      if(!list) {
        return res.sendStatus(404);
      }

      list.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;