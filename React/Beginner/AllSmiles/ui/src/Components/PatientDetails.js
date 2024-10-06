const PatientDetails = () => {

    return(
       <>
            <form>
                <div className="form-floating mb-3 mt-3">                   
                    <input type="text" className="form-control w-50" id="pname" placeholder="Enter Name" name="pname"></input>
                    <label for="pname">Patient Name:</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control w-50" id="age" placeholder="Enter Age"  name="age" ></input>
                    <label for="age">Age :</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control w-50" id="phone" name="phone" placeholder="Enter Phone" />
                    <label for="phone">Phone:</label>
                </div>
                <select className="form-select form-select-sm w-50">
                     <option value="-1">You Heard Clinic From ..</option>
                     <option value="1">Board</option>
                     <option value="2">Reference</option>
                     <option value="3">Camp</option>                        
                </select>
                <div className="mb-3 mt-3">
                    <label for="pfile" className="form-label">Upload Prescription...</label>
                    <input type="file" id="pfile" className="form-control w-50" aria-describedby="customfilehelp"></input>
                    <div id="customfilehelp" className="form-text">Example: .pdf, .docx, .jpg</div>
                </div>
                <button type="submit" className="mt-1 btn btn-danger col-md-1">Save</button>
            </form>
       </>
    );
}

export default PatientDetails;