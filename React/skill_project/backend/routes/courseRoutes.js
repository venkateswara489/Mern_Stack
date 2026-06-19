const express =
require("express");

const router =
express.Router();

const {
  getCourses,
  addCourse
}
=
require(
  "../controllers/courseControllers"
);

router.get(
  "/",
  getCourses
);

router.post(
  "/",
  addCourse
);

module.exports = router;
