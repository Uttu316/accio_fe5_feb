import Header from "../../components/header";
import LoginForm from "../../components/loginForm";
import PageWrapper from "../../components/pageWrapper";

const SignIn = () => {
  return (
    <PageWrapper title={"SignIn"} id="sigin_page">
      <LoginForm />
    </PageWrapper>
  );
};

export default SignIn;
