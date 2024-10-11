import { useState } from "react";
import InputForm from "./InputForm";
import PieChart from "./PieChart";
import Saving from "./Saving";
import TaskList from "./TaskList";

const Expense = (props) => {

    const [userInput , setUserInput] = useState();
    const [taskList, setTaskList] = useState([]);

    const addTask = (newItem) => {
        if(taskList === undefined)
            setTaskList(newItem);
        else
            setTaskList([...taskList , newItem]);
    };

    return(
        <>
            <InputForm userInput={userInput} setUserInput={setUserInput} addTask={addTask} />
            <TaskList taskList={taskList} />
            <Saving />
            <PieChart />
        </>
    );
}

export default Expense;