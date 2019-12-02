const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.delete("/:id", require("./controller").dellOne);
router.put("/:id", require("./controller").updateOne);



module.exports = router;
