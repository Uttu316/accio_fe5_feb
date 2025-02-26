import styles from "./loginForm.module.css";
import PropTypes from "prop-types";

const InputItem = ({
  value,
  label,
  required,
  type,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <div className={styles.input_item}>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        required={required}
        name={name}
        value={value}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

InputItem.prototype = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default InputItem;
