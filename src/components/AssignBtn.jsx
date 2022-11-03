import { useEffect, useState } from 'react';
import InputEmployee from './InputEmployee';

//need to have AssignBtn recognize employee object and equal count to smallTopCount or BigTopCount

const AssignBtn = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count is now: ', count);
  }, [count]);

  const handleClick = event => {
    setCount(count + 1);
  };

  return (
    <div>
      {/*  <p>{count}</p> */}
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default AssignBtn;
