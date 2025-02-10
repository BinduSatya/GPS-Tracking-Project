import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setCaptainData({ email, password });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="">
        <form
          className="h-screen pl-7 pr-7  flex flex-col justify-between align-center"
          onSubmit={(e) => submitHandler(e)}
        >
          <div>
            <Header />
            <h3 className="text-xl mb-1  font-medium ">Enter Email</h3>
            <input
              type="email"
              name=""
              id=""
              value={email}
              placeholder="abc@domain.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] border rounded text-lgplaceholder:text-base w-full px-3 py-1 outline-none mb-4"
            />
            <h3 className="text-xl  mb-1 font-medium ">Enter Password</h3>
            <input
              type="password"
              className="bg-[#eeeeee] border rounded text-lg placeholder:text-base w-full px-3 py-1 outline-none mb-4"
              name=""
              id=""
              value={password}
              placeholder="134567890"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="bg-[#111] rounded text-white text-xl font-medium  placeholder:text-base w-full px-3 py-1 outline-none mb-2">
              Login
            </button>
            <p className="text-center">
              New captain?
              <Link to="/captain-signup" className="text-blue-600">
                {" "}
                Register as new captain
              </Link>
            </p>
          </div>
          <div>
            <Link
              className="bg-[#002b63] rounded flex items-center justify-center text-white text-xl font-medium  placeholder:text-base w-full px-3 py-1 mb-10 outline-none mt-1"
              to="/login"
            >
              Sign in as User
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CaptainLogin;
