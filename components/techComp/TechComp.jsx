import Image from "next/image";

const TechComp = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md w-20 h-20 md:w-25 md:h-25 lg:w-30 lg:h-30">
      <div className="flex items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={120}
          height={120}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TechComp;
