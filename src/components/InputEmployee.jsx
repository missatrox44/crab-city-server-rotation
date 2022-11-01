import React, {useState} from 'react';
import SmallTop from './SmallTop';
import BigTop from './BigTop';
import { v4 as uuidv4 } from 'uuid';
// import OnBreak from './OnBreak';

// let id = 0;

export default function InputEmployee() {
    
    // Sets state hook to an empty array which will hold the employees
    let [employees, setEmployee] = useState([]);

    // When the 'add' button is clicked, new employee is added to array.
    function handleSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('employee-name')

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

      // ***** Not functioning  - need to figure out; 
      // Resets name input placeholder
      // nameInput.value = '';


  return (
    <div>
      <p>Input Employee Component</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employee-name">Add Employee</label>
        <input id="employee-name" placeholder='name'></input>

        {/* include radio buttons for server or trainee */}
        {/* for logic-- if server selected, added to both small and big top tables. if trainee, only added to small */}
        <button type="submit">Add</button>
      </form>

      <SmallTop employees={employees}/>
      <BigTop employees={employees}/>
      
      </div>

  );
}

//enter name
//enter title - server/trainee