import express from 'express';
import path from 'path';
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});

/* Static FIles */
app.use(express.static("public"));

app.use("/", pageRoutes);

app.use("/about", pageRoutes);

app.use("/contact", pageRoutes);



/*PORT*/ 
app.listen(PORT, () =>{
    console.log(`Running ${PORT}`);
})
