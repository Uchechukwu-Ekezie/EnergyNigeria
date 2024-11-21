import React from "react";
import exeh from "../../Assets/img/exehibition.webp";
import conf from "../../Assets/img/conference.webp";
import prod from "../../Assets/img/proSec.webp";
import vip from "../../Assets/img/vip.webp";

const ShowFeature = () => {
  const features = [
    {
      title: "Exhibition",
      description:
        "Our international exhibition has 150+ exhibitors offering a unique opportunity for attendees to network, trade, and discover new opportunities.",
      image: exeh,
    },
    {
      title: "Conferences",
      description:
        "The leadership summit, technical seminar, and newly launched Energy-X Contest are premier events for industry professionals seeking the latest challenges and innovations in West Africa's energy sector.",
      image: conf,
    },
    {
      title: "Product sectors",
      description:
        "Our exhibition showcases 5 diverse product sectors and the latest energy equipment solutions all in one convenient location.",
      image: prod,
    },
    {
      title: "VIP programme",
      description:
        "Our exclusive VIP initiative connects decision-makers and energy experts, providing attendees with high-level opportunities to network with key players.",
      image: vip,
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">
          2024 Show Features
        </h2>
        <div className="grid w-full gap-6 h-96 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 text-center bg-white rounded-lg shadow-md h-96"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-md"
              />
              <h3 className="mb-2 text-xl font-semibold text-yellow-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 text-white transition bg-red-500 rounded hover:bg-red-600">
            Visitor registration
          </button>
          <button className="px-6 py-3 text-white transition bg-red-500 rounded hover:bg-red-600">
            Delegate registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowFeature;
