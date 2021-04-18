const express = require('express');
const router = express.Router();
const ConcertsController = require('../controllers/concerts.controllers.js');

router.get('/concerts', ConcertsController.getAll);

router.get('/concerts/random', ConcertsController.getRandom);

router.get('/concerts/:id', ConcertsController.getId);

router.post('/concerts', ConcertsController.post);

router.put('/concerts/:id', ConcertsController.put);

router.delete('/concerts/:id', ConcertsController.delete);

module.exports = router;