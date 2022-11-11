import React, {useState} from 'react';
import SmallTop from './SmallTop';
import BigTop from './BigTop';
import { v4 as uuidv4 } from 'uuid';

export default function InputEmployee() {
    
    // Sets state hook to an empty array which will hold the employees
    let [employees, setEmployee] = useState([]);
    let [serverStatus, setServerStatus] = useState("server");

    // When the 'add' button is clicked, new employee is added to array.
    function handleSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('employee-name');
      
      // Sets New Employee values based on what is inputed
      setEmployee(arr => [...arr, {
        id: uuidv4(),
        name: nameInput.value, 
        trainee: false,
        currentCount: 0, 
        skip: false, 
        pause: false, 
        clockout: false,
      }]);
    }

    function inTraining (e) {
      e.preventDefault();
      setServerStatus("trainee");
    }

    console.log("serverStatus:", serverStatus);
    
    // ***** Not functioning  - need to figure out; 
      // Resets name input placeholder
      // nameInput.value = '';

  return (
    <div>
      <p>Input Employee Component</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employee-name">Add Employee</label>
        <input 
          id="employee-name" 
          placeholder='name'
          value={employees.name}
        />
        <button type="submit">Add</button>
      </form>
        {/* include radio buttons for server or trainee */}
        {/* for logic-- if server selected, added to both small and big top tables. if trainee, only added to small */}
        
        <input 
          type="radio" 
          // id="server" 
          name="serverStatus" 
          value={employees.serverStatus}
          defaultChecked
          // checked={employees.serverStatus === "server"}
          // checked={employees.trainee === true}
          // onChange={handleSubmit}
          />
        <label htmlFor="serverStatus">Server</label>

        <input 
          type="radio" 
          id="in-training" 
          name="serverStatus" 
          value={employees.serverStatus}
          // checked={employees.serverStatus === "in-training"}
          onChange={inTraining}
          />
        <label htmlFor="serverStatus">In Training</label>

          
        
      

      <SmallTop employees={employees}/>
      <BigTop employees={employees}/>
      
      </div>

  );
}

//enter name
//enter title - server/trainee