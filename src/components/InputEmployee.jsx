import React, {useState} from 'react';
import SmallTop from './SmallTop';
import BigTop from './BigTop';
// import OnBreak from './OnBreak';

let id = 1;

export default function InputEmployee() {
    
    let [employees, setEmployee] = useState([{
      id: id,
      name: '', 
      trainee: false,
      currentCount: 0, 
      skip: false, 
      break: false, 
      clockout: false,
    }]);

    function handleSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('employee-name')

      // Sets Employee values based on what is inputed
      setEmployee({
        id: id++,
        name: nameInput.value, 
        trainee: false,
        currentCount: 0, 
        skip: false, 
        break: false, 
        clockout: false,
      });

      // Resets name input placeholder
      nameInput.value = '';
    }

      // employees.push(employee)
      console.log("employees-from-input-component:", employees);


  return (
    <div>
      <p>Input Employee Component</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employee-name">Add Employee</label>
        <input id="employee-name" placeholder='name'></input>
        <button type="submit">Add</button>
      </form>

      <SmallTop employees={employees}/>
      {/* <BigTop employees={employees}/> */}
      
      </div>

  );
}

//enter name
//enter title - server/trainee