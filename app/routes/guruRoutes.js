const express = require("express");
const guru = require("../controllers/guruController");

const router = express.Router();

router.post("/", guru.createguru);
router.get("/", guru.getgurus);
router.get("/:id", guru.getguru);
router.patch("/:id", guru.updateguru);
router.delete("/:id", guru.deleteguru);

module.exports = router;
