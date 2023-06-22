import React from "react";
import Student from "./Student";

export default function BinaryBots({ binaryArray, removeFromStudents }) {
  return (
    <div className="defaultteam">
      <h1>Binary Bots</h1>

      {binaryArray?.map((student) => (
        <Student student={student} removeFromStudents={removeFromStudents} />
      ))}
    </div>
  );
}
