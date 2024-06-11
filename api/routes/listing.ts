import express from "express";
import { add, edit, remove, getOne, getAll } from "../controllers/listing";
const router = express.Router();
import upload from "../middleware/multer";
import protect from "../middleware/auth";


router.get("/:id", getOne)
router.get("/", getAll)
router.post("/", protect, upload.array("images", 6), add);
router.put("/edit/:id", edit);
router.put("/delete/:id", remove)

export default router;