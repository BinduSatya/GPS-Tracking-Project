import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { UserDataContext } from "../assets/context/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    // setUserData({ email, password });
    const userData = { email, password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    console.log(userData);
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
              New here?
              <Link to="/signup" className="text-blue-600">
                {" "}
                Create new Account
              </Link>
            </p>
          </div>
          <div>
            <Link
              className="bg-[#10b461] rounded flex items-center justify-center text-white text-xl font-medium  placeholder:text-base w-full px-3 py-1 mb-10 outline-none mt-1"
              to="/captain-login"
            >
              Sign in as Captain
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
