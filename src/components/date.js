import React from "react";

function date() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <h1>My name is Tahir Rashid</h1>
      <p>today date is: {date}</p>
      <p>Time is: {time}</p>
    </>
  );
}

export default date;
