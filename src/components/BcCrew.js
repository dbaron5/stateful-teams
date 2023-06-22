import React from "react";
import Student from "./Student";

export default function BcCrew({ bcArray, removeFromStudents }) {
  return (
    <div className="defaultteam">
      <h1>BC Crew</h1>

      {bcArray?.map((student) => (
        <Student student={student} removeFromStudents={removeFromStudents} />
      ))}
    </div>
  );
}
