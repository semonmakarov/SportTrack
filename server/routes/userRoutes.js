const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/saveUserCallorie', userController.saveUserCallorie);
router.get('/user/data', userController.getUserData);

module.exports = router;