import React from 'react';
// import UpNext from './UpNext';
import './SmallTop.css'
import AssignBtn from './AssignBtn';

export default function SmallTop(props) {

  console.log("Small-Top Console: Props:", props);


  return (
    <div>
      <p>Small Top Component</p>
      <table>
        <tbody>
          <tr>
            <th>Employee</th>
            <th>Total Table Count</th>
            <th>Assign</th>
            <th>Skip</th>
            <th>Pause</th>
            <th>Clock Out</th>
          </tr>
          
          {props.employees.map((employee =>
            <tr key={employee.id}>
              <td>
                {employee.name}
              </td>
              <td>
                {employee.smallTopCount}
              </td>
              <td>
                <AssignBtn />
              </td>
              <td>
                <button>Skip</button>
              </td>
              <td>
                <button>Pause</button>
              </td>
              <td>
                <button>Clock Out</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      {/* <UpNext /> */}
    </div>
  )
}

//row 
//container w/ server/trainee name
//total tables so far
//buttons - +, skip, (break/back in the game), clock out