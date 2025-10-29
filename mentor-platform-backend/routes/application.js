const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

router.post("/", applicationController.create);
router.get("/", applicationController.getAll);
router.get("/:id", applicationController.getOne);
router.put("/:id", applicationController.update);
router.patch("/:id", applicationController.patchApplication);
router.delete("/:id", applicationController.delete);
router.head("/:id", applicationController.headApplication);

module.exports = router;