import React, { useState } from 'react';

function Event() {
  const [value, setValue] = useState('');

  const eventHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target);
  };

  return (
    <>
      <input
        value={value}
        placeholder="Enter some text"
        onChange={eventHandler}
      />
    </>
  );
}

export default Event;
