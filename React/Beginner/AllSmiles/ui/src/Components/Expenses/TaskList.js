import { PropTypes } from 'prop-types';

const TaskList = (props) => {

const tableBody = props.taskList.map((item , index) => {
        return (
                <tr key={`item-${index}`}>
                    <td>
                        {item.type}
                    </td>
                    <td>
                        {item.value}
                    </td>
                    <td>    
                        
                    </td>
                </tr>

        );
});

    return(
        <>
            <table className='table table-bordered table-hover mt-4' border='1'>
                <thead>
                    <tr>
                        <th>
                            Expense Type
                        </th>
                        <th>
                            Expense Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {tableBody}
                </tbody>
            </table>
        </>
    );
}

TaskList.PropType = {
    taskList :  PropTypes.arrayOf(
         PropTypes.shape({
            type: PropTypes.string,
            value: PropTypes.string
         })
    )
}

TaskList.defaultProps = {
    taskList : []
}


export default TaskList;