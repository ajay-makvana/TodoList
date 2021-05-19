import React from 'react'
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !Desc) {
            alert("Title & Discription Not Be Empty")
        }
        else {
            addTodo(title, Desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3" style={{minHeight:"100%"}}>
            <h3><div className="text-center">Add Todo</div></h3>
            <form onSubmit={submit}>
                <div className="mb-1">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1">
                    <label htmlFor="Desc" className="form-label">Todo Description</label>
                    <input type="text" value={Desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn center btn-sm btn-success my-1">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
