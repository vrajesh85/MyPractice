import logo from './logo.svg';
import imagePath from "./Images/AllSmiles.jpeg";
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <div className="App">           
                <img src={imagePath} className="imgSize"></img> 
                <span className="buda">All Smiles Dental Care</span>    
        </div>
        <div className="container mt-3">
          <ul className="nav nav-pills navDark">
            <li className="nav-item">
              <a className="nav-link">Patient Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Patient Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Patient Payment</a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
      </>
  );
}

export default App;
