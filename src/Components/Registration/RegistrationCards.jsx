import React from "react";

const RegistrationCards = () => {
  const registrations = [
    {
      title: "Visitor Registration",
      price: "FREE",
      description: "Your free visitor pass will give access to:",
      benefits: [
        "150+ local and international exhibitors",
        "Technical Seminar",
        "Entrepreneurs forum",
      ],
      bgColor: "bg-pink-700",
      textColor: "text-white",
      borderColor: "border-pink-400",
    },
    {
      title: "Delegate Registration",
      price: "$500",
      description:
        "Your 3x day all-access delegate pass will give you access to:",
      benefits: [
        "All benefits of visitor pass access",
        "Keynote addresses and roundtable sessions",
        "Interactive deep-dive sessions",
        "Power lunches and breaks",
        "Technical and social seminars",
      ],
      bgColor: "bg-white",
      textColor: "text-gray-800",
      borderColor: "border-red-400",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="flex flex-col justify-center gap-6 md:flex-row w-[60%] mx-auto p-5">
        {registrations.map((registration, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 ${registration.bgColor} rounded-lg shadow-lg border-2 ${registration.borderColor} p-6 h-[50vh]`}
          >
            <h3
              className={`text-lg font-bold ${registration.textColor} text-center uppercase`}
            >
              {registration.title}
            </h3>
            <p
              className={`text-5xl font-bold mt-4 ${
                registration.title === "Visitor Registration"
                  ? "text-yellow-400"
                  : "text-yellow-500"
              } text-center`}
            >
              {registration.price}
            </p>
            <p className={`mt-4 text-xl font-bold ${registration.textColor} text-center`}>
              {registration.description}
            </p>
            <ul className="mt-6 space-y-2 text-xl ">
              {registration.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  <span className={registration.textColor}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationCards;
