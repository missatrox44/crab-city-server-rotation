
// row 
// container w/ server name
// total tables so far
// buttons - Back in the game


import React from "react";
// import CurrentCount from "./CurrentCount";
// import ServerCount from "./ServerCount";

const Server = "Kyle";
const Count = 1; 
const Button = 'Back in the game';

const BigTop = (props) => {
  return (
    <div>
      <p>Big Top Component</p>
      <table>
        <tbody>
          <tr>
            <th>Employee</th>
            <th>Total Table Count</th>
            <th>Assign</th>
            {/* when assign is clicked on big top-- write function to put employee in disabled mode for smalltop and render a button that says 'return' and remove assign and skip button */}
            {/* when the plus button is clicked, hide the plus and skip button and show a 'ready to return button */}
            <th>Skip</th>
          </tr>
          
          {props.employees.map((employee =>
            <tr key={employee.id}>
              <td>
                {employee.name}
              </td>
              <td>
                {employee.bigTopCount}
              </td>
              <td>
                <button>+</button>
              </td>
              <td>
                <button>Skip</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BigTop
