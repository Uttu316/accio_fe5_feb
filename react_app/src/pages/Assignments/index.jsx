import { useState } from "react";
import AssignmentForm from "../../components/assingments/form";
import AssignmentsList from "../../components/assingments/list";
import Header from "../../components/header";
import AssingmentProvider from "../../contexts/AssginmentContext";

const Assignments = (props) => {
  return (
    <div id="assingment_page">
      <Header title={"Assingments"} />

      <AssingmentProvider>
        <AssignmentForm />
        <AssignmentsList />
      </AssingmentProvider>
    </div>
  );
};

export default Assignments;
