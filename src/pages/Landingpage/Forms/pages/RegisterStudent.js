import Header from "../components/Header";
import RegisterStudent from "../components/RegisterStudent";

export default function SignupPage() {
  return (
    <div>
    <div className="grid h-screen place-items-center shadow-xl">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/loginstudent"
      />
      <RegisterStudent />
      
    </div>
    </div>
  );
}
