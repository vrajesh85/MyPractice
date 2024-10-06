const PatientPayment = () => {

    return(
        <>
            <form>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control w-25" id="pname" placeholder="" name="pname"></input>
                    <label for="pname">Name :</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control w-25" id="treatment" placeholder="" name="treatment"></input>
                    <label for="treatment">Treatment :</label>
                </div>
                <div className="form-floating mb-3 mt-3 col-md-5">
                    <input type="number" className="form-control w-25" id="amount" placeholder="" name="amount"></input>
                    <label for="amount">Total Amount :</label>
                </div>
                <div className="form-floating mb-3 mt-3 col-md-5">
                    <input type="number" className="form-control w-25" id="pending" placeholder="" name="pending"></input>
                    <label for="pending">Pending :</label>                    
                </div>
                <div className="form-floating mb-3 mt-3 col-md-5">
                    <input type="number" className="form-control w-25" id="paid" placeholder="" name="paid"></input>
                    <label for="paid">Paid :</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="date" className="form-control w-25" id="date" placeholder="" name="date"></input>
                    <label for="date">Date</label>
                </div>
                <button type="submit" className="btn btn-danger col-md-1">Save</button>
            </form>
        </>
    );
}

export default PatientPayment;