import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import dustin from "./assets/dustin.png";
import daniel from "./assets/daniel.jpeg";
import max from "./assets/max.jpg";
import justin from "./assets/justin.png";

function App() {
  const studentData = [
    { name: "dustin", img: dustin },
    { name: "daniel", img: daniel },
    { name: "max", img: max },
    { name: "justin", img: justin },
  ];
  const [students, setStudents] = useState(studentData);
  const [bcArray, setBcArray] = useState([]);
  const [binaryArray, setBinaryArray] = useState([]);

  //constant to remove students created.

  const removeFromStudents = (studentToRemove, targetArray) => {
    if (students.includes(studentToRemove) === true) {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    //checks to see if teams include object.  Filter creates new array, and only students other than studentToRemove are included in filtered array.

    if (bcArray.includes(studentToRemove) === true) {
      setBcArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (binaryArray.includes(studentToRemove) === true) {
      setBinaryArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    //if target=bc/binary, setBCArray will callback previous state of that array, new array with studentToRemove is moved to new array.

    if (targetArray === "bcArray") {
      setBcArray((prevBcArray) => [...prevBcArray, studentToRemove]);
    } else if (targetArray === "binaryArray") {
      setBinaryArray((prevBinaryArray) => [
        ...prevBinaryArray,
        studentToRemove,
      ]);
    }
  };

  const resetArrays = () => {
    setStudents(studentData);
    setBcArray([]);
    setBinaryArray([]);
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-reset" onClick={resetArrays}>
        Reset
      </button>
      <div className="App">
        <MainContainer
          students={students}
          bcArray={bcArray}
          binaryArray={binaryArray}
          removeFromStudents={removeFromStudents}
        />
      </div>
    </div>
  );
}

export default App;
