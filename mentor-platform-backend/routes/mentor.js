const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorcontroller");

router.post("/register", mentorController.register);
router.get("/:id", mentorController.getProfile);
router.get("/", mentorController.getAllMentors);
router.put("/:id", mentorController.updateMentor);
router.patch("/:id", mentorController.patchMentor);
router.delete("/:id", mentorController.deleteMentor);
router.head("/:id", mentorController.headMentor);

module.exports = router;