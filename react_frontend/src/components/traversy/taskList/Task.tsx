import { FC } from "react"
import { taskData } from "./Tasks"

const Task:FC<taskData> = (data:taskData) => {
    return (
        <div>
            {data.id}
        </div>
    )
}

export default Task
//{id, text, day, reminder}