import { useState } from "react";

const PatientSearch = () => {
    const[isModalOpen, setModalOpen] = useState(false);

    const patNameClick = () => setModalOpen(true);
    const closeDialog = () => setModalOpen(false);

    return(
        <>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-danger">
                        <td>
                            <button type="button" className="btn btn-link" onClick={patNameClick}>Patient Name 1</button>
                        </td>
                        <td>
                            <span>30</span>
                        </td>
                        <td>
                            <span>8978364060</span>
                        </td>
                    </tr>
                    <tr className="table-success">
                        <td>
                            <button type="button" className="btn btn-link" onClick={patNameClick}>Patient Name 2</button>
                        </td>
                        <td>
                            <span>31</span>
                        </td>
                        <td>
                            <span>9876543210</span>
                        </td>
                    </tr>
                    <tr className="table-danger">
                        <td>
                            <button type="button" className="btn btn-link">Patient Name 3</button>
                        </td>
                        <td>
                            <span>33</span>
                        </td>
                        <td>
                            <span>8121324821</span>
                        </td>
                    </tr>
                </tbody>
            </table>


            <div className={`modal ${isModalOpen ? 'show' : ''}`} 
                 style={{ display : isModalOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Patient Details</h5>
                        </div>
                        <div className="modal-body">
                            <label className="form-label"> 
                                Name : 
                            </label>
                            <label className="form-label">
                                   Vemulakonda Rajesh
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger col-md-2" onClick={closeDialog} >Close</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default PatientSearch;