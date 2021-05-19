import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

    return (
        <div className="container">
            <h3 className='text-center'>Your Todos List </h3>
            {props.todos.length ?
                <>
                    <h5 className='text-center'>You Have {props.todos.length} Todo</h5>
                    {props.todos.map((todo) => {
                        return (
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })}
                </> : <p className="text-center">No Todos to Display :)</p>
            }
        </div>
    )
}
