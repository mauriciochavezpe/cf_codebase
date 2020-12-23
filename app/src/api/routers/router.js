const router = require('express').Router();

// router.use("/",require('./router-user'))
router.get("/", (req, res) => {
    res.json({
        message: "GOOD SEE"
    })
})
router.use("/user", require('./router-user'))
// router.use("/task", require('./router-task'))

module.exports = router;
