import express from 'express';
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

/*Middleware */
app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});

/* Static FIles */
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*Routes */
app.use(pageRoutes);


/*PORT*/ 
app.listen(PORT, () =>{
    console.log(`Running ${PORT}`);
})
