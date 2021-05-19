import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="container">
            <h3 style={{ margin: "1px 0px 1px 0px", }}>{todo.title}</h3>
            <p style={{ margin: "1px 0px 1px 0px", }}>{todo.Desc}</p>
            <button className="btn btn-sm btn-danger my-1" onClick={() => { onDelete(todo) }}>Delete Todo</button>
            <hr />
        </div >
    )
}
