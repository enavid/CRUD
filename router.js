const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.getJson)
router.post('/', controller.postJson)
router.put('/', controller.putJson)
router.delete('/', controller.deleteJson)

router.post('/signup', controller.signup)
router.post('/login', controller.login)

module.exports = router; 