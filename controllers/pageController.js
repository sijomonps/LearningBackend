import path from 'path'

export const getHome = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "index.html"))
};

export const getAbout = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "about.html"))
};

export const getContact = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "contact.html"))
};

export const ping = (req, res) => {
    console.log(`[${new Date().toISOString()}] Ping received`);

    res.status(200).send("OK");
};

export const students = (req, res) => {
    const id = Number(req.params.id);
    const student = Students.find(student => student.id === id);
    if (!student){
        return res.send(`Student id: ${id} Can't be find`)
    }else{
        return res.json(student)
    }

    
};





// temperary
const  Students = [
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