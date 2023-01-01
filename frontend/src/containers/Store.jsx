import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
const Store = () => {
  const { game } = useParams();
  return (
    <>
      <Card game={game} />
    </>
  );
};

export default Store;
