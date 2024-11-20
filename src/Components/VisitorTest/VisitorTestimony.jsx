import React from "react";
import tun from '../../Assets/img/tunde.webp'
import tai from '../../Assets/img/taiwo.webp'
import kha from '../../Assets/img/khali.webp'

const VisitorTestimony = () => {
  const testimonials = [
    {
      name: "Mr. Tunde Arogunmati",
      role: "Executive Director, African Incentive Partnerships",
      testimonial:
        "A one-stop conference & exhibition destination for sustainable energy solutions across the entire social spectrum.",
      image: tun, // Update with the actual path to the image
    },
    {
      name: "Mr. Taiwo Ajayi",
      role: "CTO, Lekki Solar Company Ltd",
      testimonial:
        "Nigeria Energy is a vivid representation of what anyone who considers themselves stakeholders in the Power and energy sector need not miss annually.",
      image: tai, // Update with the actual path to the image
    },
    {
      name: "Engr. Yusuf A. Khalil",
      role: "Chief Instructor, NAPTIN",
      testimonial:
        "Nigeria Energy is really a very good experience for me where knowledge relating to the industry especially in comparison with the current trends of technology today displayed by exhibitors.",
      image: kha, // Update with the actual path to the image
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-yellow-600">
          Visitor Testimonials
        </h2>
      </div>
      <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white rounded-lg shadow-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <p className="mb-4 italic text-gray-700">
              "{testimonial.testimonial}"
            </p>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-yellow-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorTestimony;
