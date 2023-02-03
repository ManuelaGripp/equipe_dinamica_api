const router = require('express').Router()
const updload = require('../middleware/upload')

const memberController = require('../controllers/members')
const uploadController = require('../controllers/upload')



router.get('/members/:id?', memberController.getMembers)
router.post('/members', memberController.createMembers)
router.put('/members/:id', memberController.updateMembers)
router.delete('/members/:id', memberController.deleteMembers)

router.post('/upload/:id', updload.uploadFile.single('file') ,uploadController.upload)
router.get('/members',uploadController.showImage)


module.exports = router;