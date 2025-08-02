import React from "react";
import { GiShuriken } from "react-icons/gi";
const SectionHeader = ({ title }) => {
  return (
    <div className="mt-20 pb-10  ">
      <div className="text-white text-3xl flex items-center gap-3">
        <GiShuriken className="spin" />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default SectionHeader;
