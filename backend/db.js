const mongoose = require("mongoose")
const { string, boolean } = require("zod")


//''
mongoose.connect('mongodb+srv://siddhesh:rVha4WUEHzDiA0ho@cluster0.mazyd5h.mongodb.net/todo_react')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todoModel = mongoose.model('todoModel', todoSchema)

module.exports = {
    todoModel //key value same then ca use ues one
}