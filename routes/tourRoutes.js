const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkId,
} = require('../controllers/tourController');
const router = express.Router();

router.param('id', checkId);

//create a checkbody middleware

//check if the body contains the name and price property

//if not, send 400(bad req)

//add it to the post handler stack

router.route('/').get(getAllTours).post(middleware, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
