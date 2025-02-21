import { useState } from "react";
import AssignmentForm from "../../components/assingments/form";
import AssignmentsList from "../../components/assingments/list";
import Header from "../../components/header";

const Assignments = () => {
  const [assingments, setAssignments] = useState([]);
  return (
    <div id="assingment_page">
      <Header title={"Assingments"} />
      <AssignmentForm setAssignments={setAssignments} />
      <AssignmentsList assingments={assingments} />
    </div>
  );
};

export default Assignments;
