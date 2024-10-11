import { PropTypes } from 'prop-types';

const InputForm = props => {

    const handleTypeChange = (e) => {
        e.preventDefault();
        const newUserInput = { ...props.userInput , type: e.target.value };
        props.setUserInput(newUserInput);
    }

    const handleValueChange = (e) => {
        e.preventDefault();
        const newUserInput = { ...props.userInput, value: e.target.value }; 
        props.setUserInput(newUserInput);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if(props.userInput.type !== '' && props.userInput.value != ''){
            const userInput = {
                type : props.userInput.type,
                value : props.userInput.value
            }
    
            props.addTask(userInput);
            
            props.setUserInput({ type :'', value: '' });
        }
    }

    return(
        <>
            <div className="row">
                <div className="form-floating mt-3 col-md-2">
                    <input type="text" className="form-control" value={props.userInput.type} onChange={handleTypeChange}
                      placeholder="" id="type" name="type"></input>
                    <label for="type">Type :</label>
                </div>
             
                <div className="form-floating mt-3 col-md-2">
                    <input type="text" className="form-control" value={props.userInput.value} onChange={handleValueChange}
                    placeholder="" id="value" name="value"></input>
                    <label for="value">Value :</label>
                </div>
                <div className="col-md-2 mt-4 ms-5">
                    <button type="button" className="btn btn-danger me-auto w-50" onClick={handleAddTask}>Add</button>
                </div>
            </div>
        </>
    );
}


InputForm.propTypes = {
    userInput : PropTypes.shape({
        type : PropTypes.string,
        value : PropTypes.string
    }),
    setUserInput: PropTypes.func,
    addTask : PropTypes.func
}

InputForm.defaultProps = {
    userInput : {
        text : "",
        value : ""
    }
}

export default InputForm;