import Student from "../models/student.js";
import { deleteStudentById, getStudentById, saveStudent, updateStudentById, loginService } from "../services/StudentServices.js";

const registerStudent = async (req, res) => {
    try {
        var studentObj = req.body;
        const isStudentPresent = await Student.exists({email: studentObj.email});
        if(isStudentPresent){
            return res.status(500).json({msg: "Student already exists!"});
        }
        console.log(studentObj);
        const savedStudent = await saveStudent(studentObj);
        console.log(savedStudent);
        return res.status(200).json(savedStudent);
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const getStudent = async (req, res) => {
    try {
        const studentObj = await getStudentById(req.params.id);
        if(studentObj){
            return res.status(200).json(studentObj);
        }
        return res.status(500).json({msg: "Student does not exist!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const updateStudent = async (req, res) => {
    try {
        const currentStudent = req.body;
        const isStudentPresent = await Student.exists({_id: req.params.id});
        if(!isStudentPresent){
            return res.status(500).json({msg: "Student does not exist!"});
        }
        const updatedStudent = await updateStudentById(req.params.id, currentStudent);
        if(updatedStudent){
            return res.status(200).json(updatedStudent);
        }
        return res.status(500).json({msg: "Could not update the student!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const deleteStudent = async (req, res) => {
    try {
        const isStudentPresent = await Student.exists({_id: req.params.id});
        if(!isStudentPresent){
            return res.status(500).json({msg: "Student does not exist!"});
        }
        const deletedOj = await deleteStudentById(req.params.id);
        return res.status(200).json(deletedOj);
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const loginStudent = async (req, res) => {
    try {
        const {email, password} = req.body;
        const studentObj = await loginService(email, password);
        if(!studentObj){
            return res.status(400).json({msg: "Incorrect credentials!"});
        }
        return res.status(200).json(studentObj)

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Internal server error!"});
    }
}

export {
    registerStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    loginStudent,
}