import React from "react";

const sections = [
  {
    title: "Why exhibit?",
    image: "path/to/exhibit-image.jpg", // Replace with the actual image path
    points: [
      "Spark new deals: Engage with 93% of businesses who recognize Nigeria Energy as an important platform for their business.",
      "Connect and collaborate: Network face-to-face with key decision-makers and potential partners to unlock business opportunities.",
    ],
    buttonText: "Stand Enquiry",
  },
  {
    title: "Why sponsor?",
    image: "path/to/sponsor-image.jpg", // Replace with the actual image path
    points: [
      "Be seen amongst those that matter, at scale: Get premium brand exposure positioning you as a thought leader.",
      "Differentiate from competitors: Maximize your brand's impact with pre-show promotions, eye-catching outdoor branding, and exclusive venue and conference sponsorships.",
    ],
    buttonText: "Sponsorship Enquiry",
  },
];

const WhyExhibit= () => {
  return (
    <section className="py-12 bg-yellow-400">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl lg:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
          >
            {/* Section Title */}
            <h3 className="py-4 text-xl font-bold text-center text-yellow-600">
              {section.title}
            </h3>
            <div className="flex flex-col items-center px-6 py-4">
              {/* Image */}
              <img
                src={section.image}
                alt={section.title}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              {/* Points */}
              <ul className="mb-6 space-y-4 text-left text-gray-700">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 font-bold text-yellow-600">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button className="px-6 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600">
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyExhibit;