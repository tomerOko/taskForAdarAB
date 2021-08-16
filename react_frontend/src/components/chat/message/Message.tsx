import React from 'react'
import './Message.css'

interface messsageProps{
    backgourdColor: string;
    text:string;
}


const Message = (props : messsageProps) => {
    return (

        <div className="massegeFrame" style={{backgroundColor:props.backgourdColor}}>
            <p> {props.text}</p>
        </div>
    )
}

export default Message
