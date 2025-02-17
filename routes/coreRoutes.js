const express = require('express');
const router = express.Router();
const coreController = require('../controllers/coreController');
const { ensureAuthenticated } = require('../middlewares/authMiddleware');

// Route to render the homepage for authenticated users
router.get('/', ensureAuthenticated, coreController.getIndex);
router.get('/wellness', ensureAuthenticated, coreController.getPage);
router.get('/mindcare', ensureAuthenticated, coreController.getPage);
router.get('/zen', ensureAuthenticated, coreController.getPage);
router.get('/vital', ensureAuthenticated, coreController.getPage);
router.get('/mood', ensureAuthenticated, coreController.getPage);

module.exports = router;
