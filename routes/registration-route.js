var express = require('express');
var router = express.Router();

const userController=require('../controllers/user-controller');
const validationRule= require('../middlewares/validation-rule');

router.get('/register', userController.userForm);
router.post('/register',validationRule.form, userController.validateForm);

module.exports = router;