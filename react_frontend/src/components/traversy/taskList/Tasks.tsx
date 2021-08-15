import { useState } from "react"
import Task from "./Task"


const initialState : taskData [] = [
    {
        id: 1,
        text:"hallow",
        day:"10/06",
        reminder: false
    },
    {
        id: 2,
        text:"hei",
        day:"10/06",
        reminder: true
    },
    {
        id: 3,
        text:"yoo",
        day:"10/06",
        reminder: true
    },
]

export interface taskData {
    id: number,
    text:string,
    day:string,
    reminder: boolean
}


const Tasks = () => {
    
    const [tasks, setTasks] = useState(initialState)

    // fetch('hallow', {})

    return (
        <div onClick={ ()=> setTasks([...tasks, ...tasks])}>
            {tasks.map(item => (<Task key={item.id} {... item } />) )}
        </div>
    )
}

export default Tasks
