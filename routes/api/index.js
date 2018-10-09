const router = require("express").Router();
const bookRoutes = require("./articles");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;
