import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <div>
    <div className="grid h-screen place-items-center shadow-xl">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/teacher/login"
      />
      <Signup />
      
    </div>
    </div>
  );
}
