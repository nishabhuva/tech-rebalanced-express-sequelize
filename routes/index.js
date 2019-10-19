var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
   techrolemodel.findAll()
  .then(techrolemodel => res.json(techrolemodel))
  .catch(err => res.json(err))
});

module.exports = router;
