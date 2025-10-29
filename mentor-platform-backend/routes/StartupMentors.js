const express = require("express");
const router = express.Router();
const startupMentorController = require("../controllers/startupMentorController");

router.get("/", startupMentorController.getAll);
router.get("/:id", startupMentorController.getOne);
router.post("/", startupMentorController.create);
router.patch("/:id", startupMentorController.update);
router.delete("/:id", startupMentorController.delete);

module.exports = router;