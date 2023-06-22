import React from "react";

export default function Student({ student, removeFromStudents }) {
  const handleButtonClick = (targetArray) => {
    removeFromStudents(student, targetArray);
  };

  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button
          className="button-bc"
          onClick={() => handleButtonClick("bcArray")}
        >
          BC Crew
        </button>
        <button
          className="button-binary"
          onClick={() => handleButtonClick("binaryArray")}
        >
          Binary Bots
        </button>
      </div>
    </div>
  );
}
