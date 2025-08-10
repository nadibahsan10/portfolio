import React from "react";
import { LiaAwardSolid } from "react-icons/lia";
import SectionHeader from "./SectionHeader";
import FadingSection from "./FadingSection";
import { LuGraduationCap } from "react-icons/lu";

const Awards = () => {
  const awardsData = [
    {
      title: "First Runner-up",
      description:
        "Database Management System in UIU CSE Project Show Summer 2023",
      icon: <LiaAwardSolid className="text-5xl" />,
    },

    {
      title: "Merit-based Scholarships",
      description:
        "Awarded in five consecutive trimesters in recognition of academic excellence.",
      icon: <LuGraduationCap className="text-5xl " />,
    },
  ];

  return (
    <FadingSection className="container py-20" id="awards">
      <SectionHeader title={"Awards"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            title={award.title}
            description={award.description}
            icon={award.icon}
          />
        ))}
      </div>
    </FadingSection>
  );
};

const AwardCard = ({ title, description, icon }) => {
  return (
    <div className="border border-neutral-800 p-6 rounded-lg shadow-md bg-neutral-900 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/30">
      <div className="p-3 rounded-[8px] bg-primary inline-block mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
};

export default Awards;
