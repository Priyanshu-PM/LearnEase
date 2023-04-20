import Header from "../components/Header";
import LoginStudent from "../components/LoginStudent";
import login from "../../../../assets/login.jpg";

export default function LoginPage() {
  return (
    <div className="flex flex-row flex-grow flex-wrap grid-flow-row items-center justify-center">
      <p className="absolute left-2 top-2 text-2xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </p>
        <div className="grow h-screen w-1/2 flex justify-center items-center bg-gray-200 sm:hidden">
        
      <img src={login} alt="login" className="h-full w-full"/>
      </div>

    <div className="grow h-screen  items-center p-10 sm:mt-5">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/student/signup"
      />
      <LoginStudent />
    </div>
    </div>
  );
}
