import { FC, MouseEventHandler } from "react"

interface Button_props{
    Visitor?:MouseEventHandler<HTMLButtonElement>,
    color: string;
    text:string;
}


const Button: FC<Button_props>= ({Visitor, color, text}) => {
    return (
        <div>
            <button className="btn" style={{color:color}} onClick={Visitor}>{text}</button>     
        </div>
    )
}

export default Button
