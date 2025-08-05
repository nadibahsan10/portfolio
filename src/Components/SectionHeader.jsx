import React from "react";
import { GiShuriken } from "react-icons/gi";
const SectionHeader = ({ title }) => {
  return (
    <div className="py-5  ">
      <div className="text-white text-lg font-semibold flex items-center gap-3">
        <GiShuriken className="spin" />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default SectionHeader;
