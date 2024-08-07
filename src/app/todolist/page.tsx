"use client"

import React,{useState} from 'react'
import {nanoid} from 'nanoid'

import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

export default function Todo() {

    interface Todoitems{
        id: String;
        text: String;
        completed: Boolean;
    }

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todoitems[]>([]);


    const addTodoOnclick = () =>{
        addTodoitems(input);
    }

    const inputOnChange = (event:any) =>{
        setInput(event.target.value);
    }

    const addTodoitems = (text: string) => {
        const newitem:Todoitems = {
            id: nanoid(),
            text: text,
            completed: false
        }
        const updateTodos = [newitem,...todos];
        console.log(updateTodos);
        setTodos(updateTodos);
        setInput("");
    }

  return (
    <>
      <h1 className="text-center">Simple Todo</h1>
      <div className = "d-flex justify-content-center">
        <input
            className = "form-control d-inline m-1" 
            style = {{width: "300px" }}
            onChange = {inputOnChange}
            value={input}
            type="text" 
            />
        <button
            className = "btn btn-primary"
            onClick = {addTodoOnclick}
            disabled={input === ""}
            >Add
        </button>
      </div>
      <ul>
            {todos.map( (todo) => (
                <li key={todo.id.toString()}>
                    {todo.text}
                </li>
            ))}
        </ul>
    </>
  )
}
