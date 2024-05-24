const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Student = new Schema({
name: {
type: String
},
email: {
type: String
},
phone: {
type: Number
},
rollno: {
    type:Number
}},
{
collection: 'Students'
});

module.exports = mongoose.model('Students', Student);
