const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todoModel } = require('./db');
const cors=require('cors')
const app = express();
// import {createTodo,updateTodo} from ""

app.use(express.json());
app.use(cors());

app.post("/todos", async (req, res) => {
    let createPayload = req.body;
    let parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).send("u sent the wrong inputs")
        return;
    }
    // put in mongodb
    await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: 'todo created successfully'
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todoModel.find();
    res.json({
        todos: todos
    })
})


app.put("/completed", async (req, res) => {
    let updatePayload = req.body;
    let parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).send("u sent the wrong inputs")
        return;
    }
    // mark as complete

    await todoModel.updateById(req.body._id, {
        completed: true
    })
    res.send('todo marked as complete')
})

app.listen(3000, () => {
    console.log('app running at port 3000');
})