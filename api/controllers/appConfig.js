const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Wishlist App',
    description: 'An app that allows users to curate and share their wishlists.',
  });
});


module.exports = router;