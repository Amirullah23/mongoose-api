const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "Hello to my api" });
});

module.exports = router;
