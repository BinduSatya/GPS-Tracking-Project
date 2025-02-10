import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const CaptainSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState({});
  //   const user1 = useContext(UserDataContext);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setUserData({ fullname: { firstname, lastname }, email, password });
    console.log(userData);
    // console.log(user1);
    setFirstname("");
    setLastname("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };

  return (
    <div className="">
      <form
        className="h-screen pl-7 pr-7  flex flex-col justify-between align-center"
        onSubmit={(e) => submitHandler(e)}
      >
        <div>
          <Header />
          <h3 className="text-l mb-1  font-medium ">Enter Full Name</h3>
          <div className="flex gap-2">
            <input
              type="text"
              name=""
              id=""
              value={firstname}
              placeholder="First Name"
              required
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] border rounded text-lgplaceholder:text-base w-full px-3 py-1 outline-none mb-4"
            />
            <input
              type="text"
              name=""
              id=""
              value={lastname}
              placeholder="Last Name"
              required
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="bg-[#eeeeee] border rounded text-lgplaceholder:text-base w-full px-3 py-1 outline-none mb-4"
            />
          </div>
          <h3 className="text-l mb-1  font-medium ">Enter Email</h3>
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
          <h3 className="text-l  mb-1 font-medium ">Enter Password</h3>
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
          <h3 className="text-l  mb-1 font-medium ">Confirm Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] border rounded text-lg placeholder:text-base w-full px-3 py-1 outline-none mb-4"
            name=""
            id=""
            value={confirmPassword}
            placeholder="134567890"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <button className="bg-[#111] rounded text-white text-xl font-medium  placeholder:text-base w-full px-3 py-1 outline-none mb-2">
            Login
          </button>
          <p className="text-center">
            Already signed In?
            <Link to="/captain-login" className="text-blue-600">
              {" "}
              Login as Captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            className="bg-[#002b63] rounded flex items-center justify-center text-white text-xl font-medium  placeholder:text-base w-full px-3 py-1 mb-10 outline-none mt-1"
            to="/captain-login"
          >
            Sign in as User
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CaptainSignUp;
