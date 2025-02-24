import { useState } from "react";
import AssignmentForm from "../../components/assingments/form";
import AssignmentsList from "../../components/assingments/list";
import Header from "../../components/header";
import { assignments as data } from "../../utils/data/assignments";

const Assignments = () => {
  const [assingments, setAssignments] = useState(data);
  return (
    <div id="assingment_page">
      <Header title={"Assingments"} />
      <AssignmentForm setAssignments={setAssignments} />
      <AssignmentsList assingments={assingments} />
    </div>
  );
};

export default Assignments;
