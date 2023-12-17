const Router = require('express')
const router = new Router()
const ProjectController = require('../controllers/project_controller');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/getall', authMiddleware, ProjectController.getAllProjectByUserId)

module.exports = router