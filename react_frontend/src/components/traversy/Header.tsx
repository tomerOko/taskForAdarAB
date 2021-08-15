import { FC, MouseEvent, MouseEventHandler } from "react"
import Button from "./Button"

interface Header_props{
    say:string,
    time?:string
}


const Header:FC<Header_props> = ({say, time}) => {
    return (
        <div>
            {/* <h2 style={{color:'red'}}>{say}</h2> */}
            <header className='header'>
                <h1>{say}</h1>
                <Button color={"red"} text={"hallow"} Visitor={(e)=>console.log((e.target as HTMLButtonElement).innerHTML)}/>
            </header>
            <h3>{time}</h3>
        </div>
    )
}

Header.defaultProps={
    time:'15:44'
}

export default Header
