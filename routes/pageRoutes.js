import express from 'express'
import path from 'path'

const router = express.Router();

/* Home */
router.get("/", (req, res) =>{
    res.sendFile(
        path.join( process.cwd(), "views", "index.html")
    );
});

router.get("/about", (req, res) => {
    res.sendFile(
        path.join(process.cwd(), "views", "about.html")
    );
});

router.get("/contact", (req, res) => {
    res.sendFile(
        path.join(process.cwd(), "views", "contact.html")
    );
});

export default router

