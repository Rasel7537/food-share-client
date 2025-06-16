
import React from "react";
import {
  FaUtensils,
  FaHeart,
  FaBook,
  FaMedkit,
  FaHome,
  FaWater,
} from "react-icons/fa";

const initiatives = [
  {
    title: "Charity For Food",
    description:
      "Charity For Food provides nutritious meals to those facing hunger and food insecurity. We aim to nourish bodies and uplift lives with compassion and care.",
    icon: <FaUtensils className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Charity For Cloth",
    description:
      "Charity For Cloth distributes clean, quality clothing to people in need with dignity and care. Our mission is to bring warmth, confidence, and hope to every life we touch..",
    icon: <FaHeart className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Charity For Education",
    description:
      "Charity For Education supports underprivileged children with access to quality learning opportunities. We believe education is the key to breaking the cycle of poverty and building a brighter future.",
    icon: <FaBook className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Charity For Health",
    description:
      "Charity For Health provides medical support and promotes wellness in underserved communities. We aim to ensure everyone has access to basic healthcare and a healthier future.",
    icon: <FaMedkit className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Charity For Shelter",
    description:
      "Charity For Shelter offers safe and dignified housing to those in need. We strive to create a stable foundation for rebuilding lives with hope and care.",
    icon: <FaHome className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Charity For Clean Water",
    description:
      "Charity For Clean Water ensures access to safe and clean drinking water for vulnerable communities. We work to prevent waterborne diseases and promote healthier lives.",
    icon: <FaWater className="text-green-500 w-12 h-12" />,
  },
];

const OurMission = () => {
  return (
    <section className="px-4 py-8 bg-gray-100 text-center mt-52 lg:mt-20 md:mt-28  ">
      <h2 className="text-3xl font-bold mb-6">OUR MISSION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {initiatives.map((init, index) => (
          <div
            key={index}
            className="card bg-white shadow-md border border-gray-200 rounded-lg p-4"
          >
            <div className="mb-4 flex justify-center">{init.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{init.title}</h3>
            <p className="text-sm">{init.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
