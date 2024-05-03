const express = require('express');
const router = express.Router();
const {
    createReaction,
    deleteReaction
} = require('../controllers/reactionController');

router.post('/', createReaction);
router.delete('/:id', deleteReaction);

module.exports = router;
