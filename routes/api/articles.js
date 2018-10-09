const router = require("express").Router();
const savedController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(savedController.findById)
//   .put(savedController.update)
//   .delete(savedController.remove);

module.exports = router;
