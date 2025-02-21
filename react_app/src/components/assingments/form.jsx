import { useState } from "react";
import styles from "./form.module.css";

const AssignmentForm = (props) => {
  const { setAssignments } = props;
  const [data, setData] = useState({
    name: "",
    url: "",
  });

  const onInput = (e) => {
    const { value, name } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.url) {
      setAssignments((prev) => [...prev, data]);
      setData({
        name: "",
        url: "",
      });
    }
  };

  return (
    <form className={styles.assignment_form}>
      <div className={styles.input_item}>
        <label htmlFor="name">Name</label>
        <input
          onChange={onInput}
          id="name"
          value={data.name}
          name="name"
          placeholder="Enter name"
        />
      </div>
      <div className={styles.input_item}>
        <label htmlFor="url">URL</label>
        <input
          onChange={onInput}
          type="url"
          name="url"
          value={data.url}
          id="url"
          placeholder="Enter URL"
        />
      </div>
      <button onClick={onSubmit} className={styles.assignment_form_btn}>
        Submit
      </button>
    </form>
  );
};
export default AssignmentForm;
