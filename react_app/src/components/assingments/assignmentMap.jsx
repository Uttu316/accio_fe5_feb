import { useContext } from "react";
import styles from "./list.module.css";
import { AssignmentContext } from "../../contexts/AssginmentContext";
const AssignmentMap = () => {
  const { assingments } = useContext(AssignmentContext);
  return (
    <div>
      {assingments.map((item, index) => (
        <p key={index} className={styles.assignment_list_item}>
          <a target="_blank" href={item.url}>
            {item.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default AssignmentMap;
