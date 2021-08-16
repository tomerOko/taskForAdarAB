import './App.css';
// import AllTests from './components/tests/AllTests';
import Header from './components/traversy/Header';
import Tasks from './components/traversy/taskList/Tasks';
import ChatBox from './components/chat/chatButton/chatButton'
import { CSSProperties } from 'react';

function App() {

  return (
    <div style={outerContainerStyle}>
    <div className="container" style={innerContainerStyle}>
      <ChatBox/>
    </div>
    </div>
  );
}

const fullScreen:CSSProperties = {
  width:'100vw',
  maxWidth:'100%',
  height:'100vh',
  maxHeight:'100%',
}

const innerContainerStyle:CSSProperties = Object.assign({
  display:'grid',
  alignItems: 'center',
  justifyContent: 'center',
}, fullScreen)


const outerContainerStyle:CSSProperties = Object.assign({
  display:'absolute'
}, fullScreen)

console.log(innerContainerStyle)









  //  {/* <AllTests/> */}
  //     {/* <Header say="task traker" time="" />
  //     <Tasks></Tasks> */}
export default App;

//אחרי שמדברים על style
// https://create-react-app.dev/docs/adding-a-sass-stylesheet
// https://www.w3schools.com/react/react_sass.asp