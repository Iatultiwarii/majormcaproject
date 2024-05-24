// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const studentRoute = express.Router();

// Student module which is required and imported
let studentModel = require('../Model/student');

// To Get List Of Students
studentRoute.route('/').get(function (req, res) {
    studentModel.find(function (err, students) {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
});

// To Add New Student
studentRoute.route('/addStudent').post(function (req, res) {
    let student = new studentModel(req.body);
    student.save()
        .then(() => {
            res.status(200).json({ 'student': 'Student Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});

// To Get Student Details By Student ID
studentRoute.route('/editStudent/:id').get(function (req, res) {
    let id = req.params.id;
    studentModel.findById(id, function (err, student) {
        if (err) {
            res.status(400).send("Unable To Find Student");
        } else {
            res.json(student);
        }
    });
});

// To Update The Student Details
studentRoute.route('/updateStudent/:id').post(function (req, res) {
    studentModel.findById(req.params.id, function (err, student) {
        if (!student) {
            return res.status(404).send('Unable To Find Student With This Id');
        } else {
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.email = req.body.email;
            student.phone = req.body.phone;

            student.save().then(() => {
                res.json('Student Updated Successfully');
            }).catch(() => {
                res.status(400).send("Unable To Update Student");
            });
        }
    });
});

// To Delete The Student
studentRoute.route('/deleteStudent/:id').get(function (req, res) {
    studentModel.findByIdAndRemove({ _id: req.params.id }, function (err, student) {
        if (err) {
            res.status(400).send("Unable To Delete Student");
        } else {
            res.json('Student Deleted Successfully');
        }
    });
});

module.exports = studentRoute;
