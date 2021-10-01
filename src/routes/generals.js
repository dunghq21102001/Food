const express = require('express')
const router = express.Router()
const generalsController = require('../app/controllers/generalsController')

router.get('/create', generalsController.create)
router.post('/store', generalsController.store)
router.get('/:id/edit', generalsController.edit)
router.post('/handle-form-action', generalsController.handleFormAction)
router.put('/:id', generalsController.update) //PUT - để chỉnh sửa data
router.patch('/:id/restore', generalsController.restore)
router.delete('/:id', generalsController.delete)
router.delete('/:id/force', generalsController.forceDelete)
router.get('/:slug', generalsController.show)

module.exports = router