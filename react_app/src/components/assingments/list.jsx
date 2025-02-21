import styles from "./list.module.css";

const AssignmentsList = (props) => {
  const { assingments } = props;

  return (
    <div className={styles.assignment_list}>
      <h2 className={styles.heading}>Solved Assignments</h2>
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

export default AssignmentsList;
