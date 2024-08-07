"use client"

import React,{useState} from 'react'


export default function page() {

    const [name, setName] = useState("");

    const [result , setResult] = useState("");

    const [isOk , setisOk] = useState(false);

    const greetBtnOnclick = () => {
        if(name === ""){
            setisOk(false);
            setResult(`Please noob`);
        }else{
            setisOk(true);
            setResult(`Hello, ${name}!`);
        }
    };

    const nameinputonChange = (event:any) => {
        setName(event.target.value);
    };
    
  return (
    <>
        <h1>Hello</h1>
        <input
            className = "form-control d-inline m-1" 
            style = {{width: "100px" }}
            type="text" 
            onChange={nameinputonChange}
            value = {name}
        />
        <button className = "btn btn-primary" onClick = {greetBtnOnclick}>Noo</button>

        <p className = {isOk ? "" : "text-danger"}>{result}</p>
    </>
  )
}
