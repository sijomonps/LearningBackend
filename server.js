import express from 'express';
import path from 'path';
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log("Home route visited at:", new Date())
});

/*Middleware */
app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});

/* Static FIles */
app.use(express.static("public"));

/*Routes */
app.use(pageRoutes);


// temperary
const  students = [
    {
        id: 1,
        name: "Sijomon P S",
        course: "MCA"
    },
    {
        id: 2,
        name: "Joseph Dominic",
        course: "MCA"
    },
    {
        id: 3,
        name: "Christopher",
        course: "MCA"
    }
]

app.get("/student", (req, res) => {
    res.json(students)
});





/*PORT*/ 
app.listen(PORT, () =>{
    console.log(`Running ${PORT}`);
})
