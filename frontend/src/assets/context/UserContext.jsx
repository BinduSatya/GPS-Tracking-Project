import { useState } from "react";
import { UserDataContext } from "./userDataContext";

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
  });

  

  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
