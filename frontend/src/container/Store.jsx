import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
const Store = () => {
  const { id } = useParams();
  return (
    <>
      <Card id = {id}/>
    </>
  );
};

export default Store;
