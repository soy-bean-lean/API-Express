const express = require('express');
const router = express.Router();
const ConcertsController = require('../controllers/concerts.controllers.js');

router.get('/concerts', ConcertsController.getAll);

router.get('/concerts/random', ConcertsController.getRandom);

router.get('/concerts/:id', ConcertsController.getId);

router.get('/concerts/performer/:performer', ConcertsController.getPerformer);

router.get('/concerts/genre/:genre', ConcertsController.getGenre);

router.get('/concerts/price/:price_min/:price_max', ConcertsController.getPrice);

router.get('/concerts/day/:day', ConcertsController.getDay);

router.post('/concerts', ConcertsController.post);

router.put('/concerts/:id', ConcertsController.put);

router.delete('/concerts/:id', ConcertsController.delete);

module.exports = router;