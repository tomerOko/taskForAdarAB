import './App.css';
// import AllTests from './components/tests/AllTests';
import Header from './components/traversy/Header';
import Tasks from './components/traversy/taskList/Tasks';



function App() {

  const name = 'run any code belong to this function component here'
  console.log(name)

  return (
    <div className="container" style={{border: '2px solid gray'}}>
      {/* <AllTests/> */}
      <Header say="task traker" time="" />
      <Tasks></Tasks>
    </div>
  );
}

export default App;

//אחרי שמדברים על style
// https://create-react-app.dev/docs/adding-a-sass-stylesheet
// https://www.w3schools.com/react/react_sass.asp