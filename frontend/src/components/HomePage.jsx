import React from "react";
import { useHook } from "../hooks/useHook";

import HomeOn from "./HomeOn";
import HomeUn from "./HomeUn";

const HomePage = () => {
  const { signedIn } = useHook();
  return <div>{signedIn === true ? <HomeOn /> : <HomeUn />}</div>;
};

export default HomePage;
