const  studentData = [
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

export const getAllStudents = () => {
    return students;
};

export const getStudentById = (id) => {
    return students.find(student => student.id === id);
};


export default studentData;