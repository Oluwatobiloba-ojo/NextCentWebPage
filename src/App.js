import './App.css';
import {Route} from './Route';
import {useRoutes} from "react-router-dom";


function App() {
  return(
    useRoutes(Route)
  );
}

export default App;
