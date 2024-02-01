import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={(ev) => {
            console.log(ev)
            console.log(ev.target)
            const value = ev.target.value;
            setTitle(value);
        }} /><br></br>

        <input type="text" placeholder="description" onChange={(ev) => {
            const value = ev.target.value;
            setDescription(value);
        }} /><br></br>

        <button onClick={() => {
            fetch('http://localhost:3000/todos', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async (res) => {
                const data = res.json();
                alert('todo added');
            })
        }}>Add Todo</button>
    </div>
}