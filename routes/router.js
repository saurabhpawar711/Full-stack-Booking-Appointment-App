const express = require('express');

const router = express.Router();

const mainRoutes = require('../controllers/main');

router.post('/user/add-user', mainRoutes.addUser);

router.get('/user/get-user', mainRoutes.getUser);

router.delete('/user/delete-user/:id', mainRoutes.deleteUser);

module.exports = router;