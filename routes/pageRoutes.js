import express from 'express'
import { getHome, getAbout, getContact, ping, students} from "../controllers/pageController.js"

const router = express.Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/ping", ping);
router.get("/students/:id", students)

export default router

