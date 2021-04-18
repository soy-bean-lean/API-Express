const express = require('express');
const router = express.Router();
const SeatsController = require('../controllers/seats.controllers.js');

router.get('/seat', SeatsController.getAll);

router.get('/seat/:id', SeatsController.getId);

router.post('/seat', SeatsController.post);

router.put('/seat/:id', SeatsController.put);

router.delete('/seat/:id', SeatsController.delete);

module.exports = router;