import express from 'express';
import pageRoutes from "./routes/pageRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

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
