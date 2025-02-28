import { createContext, useState } from "react";
import { assignments as data } from "../../utils/data/assignments";

export const AssignmentContext = createContext();

const AssingmentProvider = ({ children }) => {
  const [assingments, setAssignments] = useState(data);

  return (
    <AssignmentContext.Provider value={{ assingments, setAssignments }}>
      {children}
    </AssignmentContext.Provider>
  );
};
export default AssingmentProvider;
