import logo from './logo.svg';
import imagePath from "./Images/AllSmiles.jpeg";
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PatientDetails from './Components/PatientDetails';
import PatientSearch from './Components/PatientSearch';
import PatientPayment from './Components/PatientPayment';

function App() {
  return (
    <>
        <div className="App">           
                <img src={imagePath} className="imgSize"></img> 
                <span className="buda">All Smiles Dental Care</span>    
        </div>
        <div className="mt-1 ml-1">
          <ul className="nav nav-pills navDark">
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#patientDetails">Patient Details</a>
            </li>
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#patientSearch">Patient Search</a>
            </li>
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#patientPayment">Patient Payment</a>
            </li>
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#expenses">Expenses
              </a>
            </li>
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#profitloss">Profit/Loss
              </a>
            </li>
            <li className="nav-item px-5 ms-4">
              <a className="nav-link" data-bs-toggle="pill" href="#prescriptions">Prescriptions
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div id="patientDetails" className="tab-pane container active">
              <div className="container mt-3">
                <h3 className="mt-3">
                  Patient Details
                </h3>
                <PatientDetails />
              </div>
          </div>
          <div id="patientSearch" className="tab-pane container fade">
                <div className="container mt-3">
                    <h3 className="mt-3">
                        Patient Search
                    </h3>
                    <PatientSearch />
                </div>
          </div>
          <div id="patientPayment" className="tab-pane container fade">
            <div className="container mt-3">
            <h3 className="mt-3">
              Patient Payment
            </h3>
            <PatientPayment />
            </div>
          </div>
          <div id="expenses" className="tab-pane container fade">
            <h3 className="mt-3">
              Expenses
            </h3>           
          </div>
          <div id="profitloss" className="tab-pane container fade">
            <h3 className="mt-3">
              Profit/Loss
            </h3>
          </div>
          <div id="prescriptions" className="tab-pane container fade">
             <h3 className="mt-3">
               Prescriptions
             </h3>
          </div>
        </div>
      </>
  );
}

export default App;
