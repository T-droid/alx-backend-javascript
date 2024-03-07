export default class HolbertonCourse{
    constructor(name, length, students){
        if (typeof name === 'string'){
            this._name = name;
        }
        else {
            throw TypeError('Name must be a string');
        }
        if (typeof length === 'number'){
            this._length = length;
        }
        else {
            throw TypeError('Length must be a number');
        }
        if (Array.isArray(students)){
            if (students.every(item => typeof item === 'string')){
                this._students = students;
            }
        }
        else {
            throw TypeError('students must be an array of strings');
        }
    }

    //setter for name
    set name(new_name) { 
        if (typeof new_name === 'string'){
            this._name = new_name; 
        }
        else {
            throw TypeError('Name must be a string');
        }
    }
    //getter for name
    get name() { return this._name; }

    //setter for length
    set length(new_length) {
        if (typeof new_length === 'number'){
            this._length = new_length;
        }
        else {
            throw TypeError('Length must be a number');
        }
    }
    //getter for length
    get length() { return this._length; }

    //setter for students
    set students(new_students) {
        if (Array.isArray(new_students)){
            if (new_students.every(item => typeof item === 'string')){
                this._students = new_students;
            }
        }
        else {
            throw TypeError('students must be an array of strings');
        }
    }
    //getter for students
    get students() { return this._students; }
}