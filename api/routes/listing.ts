import express from "express";
import { add, edit, remove, getOne, getAll } from "../controllers/listing";
const router = express.Router();

router.get("/:id", getOne)
router.get("/", getAll)
router.post("/add", add);
router.put("/edit/:id", edit);
router.put("/delete/:id", remove)

export default router;