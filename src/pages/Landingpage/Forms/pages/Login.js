import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <div>
    <div className="grid h-screen place-items-center shadow-xl">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signupteacher"
      />
      <Login />
    </div>
    </div>
  );
}
