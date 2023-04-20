import Header from "../components/Header";
import Signup from "../components/Signup";
import signup from "../../../../assets/signup.jpg";

export default function SignupPage() {
  return (
    <div className="flex flex-row flex-grow grid-flow-row items-center justify-center">
      <p className="absolute left-2 top-2 text-2xl font-righteous font-bold ">
          Learn<span className="text-babyPink">Ease</span>
        </p>
      
      <div className="grow h-screen w-1/2 flex justify-center items-center bg-gray-200 sm:hidden">
      <img src={signup} alt="login" className="h-full w-full"/>
      </div>
      <div className="grow h-screen items-center p-10 sm:mt-5">
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
