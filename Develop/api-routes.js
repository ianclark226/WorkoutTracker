const router = require("express").Router();

router.get("/", () => {
  console.log('works');
})


module.exports = router;