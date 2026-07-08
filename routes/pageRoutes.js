import express from 'express'
import { getHome, getAbout, getContact, ping, getStudentById, createStudent, getAllStudent, deleteStudent} from "../controllers/pageController.js"

const router = express.Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/ping", ping);
router.post("/students", createStudent)
router.get("/student/:id", getStudentById)
router.get("/students/", getAllStudent)
router.delete("/student/:id", deleteStudent)

export default router

