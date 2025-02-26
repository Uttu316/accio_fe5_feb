import { useState } from "react";
import styles from "./loginForm.module.css";
import InputItem from "./inputItem";
import { api } from "../../services";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onInput = (e) => {
    setError("");
    const { name: key, value } = e.target;
    setData((prev) => ({ ...prev, [key]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.username && data.password.length > 6) {
      try {
        const res = await api({
          endpoint: "users/login",
          method: "POST",
          body: data,
        });
        if (res) {
          const { accessToken } = res;
          localStorage.setItem("token", accessToken);
          navigate("/", {
            replace: true,
          });
          return;
        }
        setError("Not valid user");
      } catch (e) {
        //handle error
        setError("username or password not correct");
      }
    } else {
      setError("Enter valid username and password");
    }
  };
  return (
    <div>
      <form className={styles.assignment_form}>
        <h2 className={styles.formHeading}>Login</h2>

        <InputItem
          label={"Username"}
          name="username"
          type="text"
          onChange={onInput}
          required={true}
          placeholder={"Enter Username"}
        />
        <InputItem
          label={"Password"}
          name="password"
          type="password"
          onChange={onInput}
          required={true}
          placeholder={"Enter Password"}
        />
        {error && <p className={styles.formError}>{error}</p>}
        <button onClick={onSubmit} className={styles.assignment_form_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
