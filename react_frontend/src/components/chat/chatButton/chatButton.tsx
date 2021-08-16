import React, { CSSProperties, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import Message from '@material-ui/icons/Message';
import CloseIcon from '@material-ui/icons/Close';
import ChatBox from '../chatBox/chatBox'
import './chatButton.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const  ChatButton = () => {
  const classes = useStyles();

  let isOpen = false


  const [Icon, setIcon] = useState(false)
  

  return (
    <>
      {Icon?<ChatBox/>:""}
      <div className={'sideRight'}>
        <div className={classes.root}>
            <IconButton color="primary" size="medium" onClick={()=>setIcon(!Icon)} aria-label="add to shopping cart">
                {Icon?<CloseIcon />:<Message />}
            </IconButton>
        </div>
      </div>
    </>
  );

}



export default ChatButton
