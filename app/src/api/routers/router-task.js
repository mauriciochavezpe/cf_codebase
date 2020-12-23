const router = require('express').Router();
const TaskController = require('../../controllers/Task.controller');

router.get('/',TaskController.getTasks)
router.post('/',TaskController.postTask)
router.post('/:id',TaskController.deleteTask)
router.post('/update/:id',TaskController.updateTask)


module.exports = router;