import React,{ useState } from "react"

function TodoItem(props){

        const completedStyle = {
                fontStyle: "italic",
                color: "#d35eOf",
                opacity: 0.4,
                textDecoration: "line-through",
        }
        return(
                <li className="todo-item">
                        <input 
                        type="checkbox" 
                        checked={props.todo.completed}
                        onChange={() => props.handleChangeProps(props.todo.id)} 
                        />
                        <button onClick= {()=> props.deleteTodoProps(props.todo.id)}>
                                Delete
                        </button>
                        <span style={props.todo.completed ? completedStyle : null}>
                                {props.todo.title}
                        </span>
                </li>
        )
}

export default TodoItem