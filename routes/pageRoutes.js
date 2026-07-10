import express from 'express'
import { getHome, getAbout, getContact, ping, getStudentById, createStudent, getAllStudent, deleteStudent} from "../controllers/pageController.js"

const router = express.Router();

//GET
router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/ping", ping);
router.get("/students/:id", getStudentById)
router.get("/students/", getAllStudent)

//POST
router.post("/students", createStudent)

//DELETE
router.delete("/student/:id", deleteStudent)

export default router

