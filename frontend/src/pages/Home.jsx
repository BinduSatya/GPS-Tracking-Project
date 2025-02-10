import { Link } from "react-router-dom";
import Header from "./Header"; // Ensure Header is correctly imported

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1676288176903-a68732722cce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen pt-1 flex flex-col justify-between w-full bg-red-500">
        <Header />
        <div className="bg-white py-5 px-5">
          <h1 className="text-2xl font-bold">Get Started with Arun</h1>
          <Link
            to="/login"
            className="flex justify-center w-full bg-black text-white py-3 font-bold rounded mt-3"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
