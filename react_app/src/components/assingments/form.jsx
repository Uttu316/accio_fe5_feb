import { useState } from "react";
import "./form.css";
const AssignmentForm = () => {
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
    console.log(data);
  };

  return (
    <form className="assignment_form">
      <div className="input_item">
        <label htmlFor="name">Name</label>
        <input
          onChange={onInput}
          id="name"
          name="name"
          placeholder="Enter name"
        />
      </div>
      <div className="input_item">
        <label htmlFor="url">URL</label>
        <input
          onChange={onInput}
          type="url"
          name="url"
          id="url"
          placeholder="Enter URL"
        />
      </div>
      <button onClick={onSubmit} className="assignment_form_btn">
        Submit
      </button>
    </form>
  );
};
export default AssignmentForm;
