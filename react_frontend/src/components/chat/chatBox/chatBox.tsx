import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import './ChatBox.css'
import Message from "../message/Message";
import axios from 'axios'
import DBMassege from '../../../interfaces/dbMessage'

const useStyles = makeStyles({
  root: {
    minWidth: 30,
    maxWidth: "50vh",
    backgroundColor:'#ddf5dba2'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

interface MassageData{
  text:string,
  fromUser:boolean,
}

const Messages:MassageData[] = [
  {
    text:"hay",
    fromUser:true
  },
  {
    text:"is any one here?",
    fromUser:true
  },
  {
    text:"sure",
    fromUser:false
  },
  {
    text:"goon morning, my name is Laila how can i help?",
    fromUser:false
  }
]

const getMassegesFromServer = async()=>{
  const data= await axios.get('http://localhost:3000/test/fromDB')
  console.log(data)
}


const postMassegeFromUser = async()=>{
  console.log('hallow');
  const messageObject: DBMassege={
    email: null,
    ip_target: null,
    isAdmin: false,
    name: null,
    text: 'hay there',
  }
  const data= await axios.post('http://localhost:3000/postMassegeFromUser/create/message', messageObject)
  console.log(data)
}

const ChatBox = () => {
  const classes = useStyles();
  const [NextMassege, setNextMassege] = useState("lets talk");
  const [Messeges, setMesseges] = useState(Messages)

  postMassegeFromUser()

  return (
      <div className='ChatBox'>
        <Card className={classes.root}>
        <CardContent  style={{height:'50vh', overflowY:'scroll'}}>
        {        
            Messeges.map(cell => <Message text={cell.text} backgourdColor="red" />)
        }
        </CardContent>
        <CardActions>
            <input type="textArea" value={NextMassege} onChange={(e)=> setNextMassege(e.target.value)} style={{ width: "80%", height:"3rem", justifyContent:"start" }} />
            <Button size="small">send</Button>
        </CardActions>
        </Card>
    </div>
  );
}

export default ChatBox

