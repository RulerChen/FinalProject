import { useState, createContext, useContext } from "react";

const HookContext = createContext({
  signedIn: false,
});

const HookProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <HookContext.Provider
      value={{
        signedIn,
        setSignedIn,
      }}
      {...props}
    />
  );
};

const useHook = () => useContext(HookContext);

export { HookProvider, useHook };
