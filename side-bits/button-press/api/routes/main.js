const router = require('express').Router();
const controller = require('../controllers')


router.get('/', controller.main.index)
router.get('/:id', controller.main.show)
router.post('/', controller.main.create)
router.put('/:id', controller.main.update)
router.delete('/:id', controller.main.remove)

module.exports = router
