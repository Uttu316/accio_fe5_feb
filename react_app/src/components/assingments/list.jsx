import AssignmentMap from "./assignmentMap";
import styles from "./list.module.css";

const AssignmentsList = () => {
  return (
    <div className={styles.assignment_list}>
      <h2 className={styles.heading}>Solved Assignments</h2>
      <AssignmentMap />
    </div>
  );
};

export default AssignmentsList;
