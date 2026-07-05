import express from 'express';
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Server is running");
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


/*PORT*/ 
app.listen(PORT, () =>{
    console.log(`Running ${PORT}`);
})
