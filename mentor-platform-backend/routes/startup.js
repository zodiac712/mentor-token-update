const express = require("express");
const router = express.Router();
const startupController = require("../controllers/startupcontroller");

// Create
router.post("/register", startupController.register);

// Read (get one)
router.get("/:id", startupController.getProfile);

// Read (get all)
router.get("/", startupController.getAllStartups);

// Update (full)
router.put("/:id", startupController.updateStartup);

// Update (partial)
router.patch("/:id", startupController.patchStartup);

// Delete
router.delete("/:id", startupController.deleteStartup);

// HEAD
router.head("/:id", startupController.headStartup);

// Mentor routes
router.post("/:id/mentors", startupController.addMentor);
router.get("/:id/mentors", startupController.getMentors);
router.delete("/:id/mentors/:mentorId", startupController.removeMentor);

module.exports = router;