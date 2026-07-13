import path from 'path'
import studentData from "../models/studentModel.js"
import { getAllStudents, fetchStudentById } from "../models/studentModel.js"
import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
    try{
        const { name, course } = req.body;

        const student = await Student.create({
            name, course
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
}

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

export const getAllStudent = (req, res) => {
    res.status(200).json(studentData)
}

export const getStudentById = (req, res) => {
    const id = Number(req.params.id);
    const student = studentData.find(student => student.id === id);
    if (!student){
        return res.status(404).json({message:`Student id: ${id} Can't be find`})
    }else{
        return res.json(student)
    }
};

export const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const studentIndex = studentData.findIndex(
        student => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = studentData.splice(studentIndex, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        deletedStudent: deletedStudent[0]
    });
};


