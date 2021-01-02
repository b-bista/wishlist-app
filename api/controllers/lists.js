const express = require('express');
const router = express.Router();
const db = require('../models');
const {ListItem, List} = db;

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
  List.findAll({include: 'listItem'})
    .then(listItems => res.json(listItems));
});


router.post('/', (req, res) => {
  List.create({
    email: req.body.email,
    password: req.body.password,
    customer: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country
    }
  }, {
    include: [ListItem]
  })
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.json(err);
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