const express = require('express')
const router = express.Router()
const viewController = require('../app/controllers/ViewController')

// viewController.index
router.get('/:slug', viewController.show)
router.get('/', viewController.index)// Tuyến đường gốc phải đưa xuống dưới cùng



module.exports = router