import Image from "next/image";

const ExpertiseLeft = ({ img }) => {
  return (
    <div className="flex justify-center sm:w-full lg:w-1/2">
      <Image
        src={img}
        alt="Expertise"
        width={800}
        height={600}
        className="max-w-full h-auto object-cover xl:w-full"
      />
    </div>
  );
};

export default ExpertiseLeft;
