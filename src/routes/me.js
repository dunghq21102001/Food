const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/meController')


router.get('/stored/cart', meController.storeCart)
router.get('/trash/cart', meController.trashCart)


module.exports = router