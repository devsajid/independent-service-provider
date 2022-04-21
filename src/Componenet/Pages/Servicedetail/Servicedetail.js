import React from "react";
import { useParams } from "react-router-dom";

const Servicedetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>welcome to service detail{serviceId}</h2>
    </div>
  );
};

export default Servicedetail;
