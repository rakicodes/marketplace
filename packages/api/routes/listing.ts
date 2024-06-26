import express from "express";
import { add, edit, remove, getOne, getAll, getLatest, search, getUserListing } from "../controllers/listing";
const router = express.Router();
import upload from "../middleware/multer";
import protect from "../middleware/auth";


router.get("/search", search)
router.get("/latest", getLatest)
router.get("/user/:id", protect, getUserListing)
router.get("/:id", getOne)
router.get("/", getAll)
router.post("/", protect, upload.array("images", 6), add);
router.put("/edit/:id", protect, upload.array("images", 6), edit);
router.delete("/delete/:id", protect, remove)

export default router;