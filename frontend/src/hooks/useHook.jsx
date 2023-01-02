import { useState, useEffect, createContext, useContext } from "react";
import { message } from "antd";

import AuthService from "../services/auth.service";

const HookContext = createContext({
  signedIn: false,
  username: "",
  account: "",
  point: 0,
});

const HookProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");
  const [point, setPoint] = useState(0);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setSignedIn(true);
      setUsername(user.user.username);
      setAccount(user.user.email);
      setPoint(user.user.point);
    }
  }, []);

  const displayStatus = (s) => {
    if (s.msg) {
      const { type, msg } = s;
      const content = {
        content: msg,
        duration: 3,
      };
      switch (type) {
        case "success":
          message.success(content);
          break;
        case "error":
        default:
          message.error(content);
          break;
      }
    }
  };

  return (
    <HookContext.Provider
      value={{
        signedIn,
        setSignedIn,
        username,
        setUsername,
        account,
        setAccount,
        point,
        setPoint,
        displayStatus,
      }}
      {...props}
    />
  );
};

const useHook = () => useContext(HookContext);

export { HookProvider, useHook };
