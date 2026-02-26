"use client";

import ExpertiseLeft from "./ExpertiseLeft";
import ExpertiseRight from "./ExpertiseRight";

const ExpertiseComponent = ({
  img,
  name,
  tagline,
  desc,
  expertAreas,
  reverse,
}) => {
  return (
    <div
      className={`w-screen flex ${reverse ? "lg:flex-row-reverse md:flex-row-reverse" : "lg:flex-row md:flex-row"} sm:flex-col overflow-hidden`}
    >
      <ExpertiseLeft img={img} />
      <ExpertiseRight
        name={name}
        tagline={tagline}
        desc={desc}
        expArea={expertAreas}
      />
    </div>
  );
};

export default ExpertiseComponent;
