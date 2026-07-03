import express from 'express'
import { getHome, getAbout, getContact, ping} from "../controllers/pageController.js"

const router = express.Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/ping", ping);

export default router

