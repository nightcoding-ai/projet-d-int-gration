const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

const authAdmin = require('../middleware/authAdmin');
const authShop = require('../middleware/authShop');



router.post('/register', authController.register)

router.get('/refresh_token', authController.refreshToken)


router.post('/login', authController.login)

router.get('/logout', authController.logout)


router.get('/infor', auth, authController.getUser)
router.get('/get_all_users',auth, authController.getAllUser)


router.post('/add_to_cart', auth, authController.addToCart)


router.patch('/add_points', auth, authController.addPoints)

/*
router.get('/history', auth, authController.history)
*/

module.exports = router