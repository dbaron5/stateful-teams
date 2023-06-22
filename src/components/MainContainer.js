import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({
  students,
  bcArray,
  binaryArray,
  removeFromStudents,
}) {
  return (
    <>
      <BcCrew bcArray={bcArray} removeFromStudents={removeFromStudents} />
      <DefaultTeam
        students={students}
        removeFromStudents={removeFromStudents}
      />
      <BinaryBots
        binaryArray={binaryArray}
        removeFromStudents={removeFromStudents}
      />
    </>
  );
}
