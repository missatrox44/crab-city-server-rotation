import React from 'react';
// import UpNext from './UpNext';
import './SmallTop.css'

export default function SmallTop(props) {

  // console.log("Small-Top Console: Props:", props);


  return (
    <div>
      <p>Small Top Component</p>
      <table>
        <tbody>
          <tr>
            <th>Employee</th>
            <th>Current Count</th>
            <th>Skip</th>
            <th>Break</th>
            <th>Clock Out</th>
          </tr>
          
          {props.employees.map((employee =><tr key={employee.id}><td>{employee.name}</td></tr>))}
          
          
          {/* <tr>
            <td>
              {props.employee.name}
            </td>
            <td>
            {props.employee.currentCount}
            </td>
            <td>
              <button>Skip</button>
            </td>
            <td>
              <button>Go on Break</button>
            </td>
            <td>
              <button>Clock Out</button>
            </td>
            <td>
              <button>Assign Next Table to Me</button>
            </td>
          </tr> */}
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