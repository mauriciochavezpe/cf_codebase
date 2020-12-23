const router = require('express').Router();
const Users = require('../../controllers/Users.controllers');
const validateUser = require('../../domain/models/User.model');

router.get("/", Users.getUsers)
router.post("/",validateUser, Users.postUser)
router.post("/:id", Users.deleteUser)
router.post("/update/:id",validateUser, Users.updateUser)

module.exports = router;