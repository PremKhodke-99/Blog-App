const { register, login } = require('../controller/user.controller');

const router = require('express').Router();

router.post('/login', login);
// router.get('/logout', );
router.post('/signup', register);

module.exports = router;