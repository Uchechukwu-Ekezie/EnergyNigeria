import React from "react";
import habbeb from '../../Assets/img/habeeb.webp'
import lamu from '../../Assets/img/lamuogunley.png'
import diarra from '../../Assets/img/mahamado.webp'
import meyan from '../../Assets/img/meyen.webp'
import mokhtar from '../../Assets/img/mokhtar.webp'
import mustapha from '../../Assets/img/mustapha.webp'
import osayande from '../../Assets/img/osayande.webp'
import oti from '../../Assets/img/oti.webp'



const speakers = [
  {
    name: "Habeeb Alebiosu",
    position: "CEO",
    company: "Viathan",
    image: habbeb, 
  },
  {
    name: "Engr. Lamu AUDU",
    position: "MD/CEO",
    company: "Mainstream Energy Solutions Limited",
    image: lamu, // Replace with actual image URL
  },
  {
    name: "Mahamadou Diarra",
    position: "Deputy Director",
    company: "French Development Agency",
    image: diarra, // Replace with actual image URL
  },
  {
    name: "Meyen Etukudo",
    position: "CEO",
    company: "Ibom Power",
    image: meyan, // Replace with actual image URL
  },
  {
    name: "Mokhtar Bounour",
    position: "CEO",
    company: "Egbin Power Plc.",
    image: mokhtar, // Replace with actual image URL
  },
  {
    name: "Dr. Mustapha Abdullahi",
    position: "Director General",
    company: "Energy Commission of Nigeria",
    image: mustapha, // Replace with actual image URL
  },
  {
    name: "Osayande Igiehon",
    position: "CEO",
    company: "Heir Energies",
    image: osayande, // Replace with actual image URL
  },
  {
    name: "Oti Ikomi",
    position: "Exec. Vice-Chairman & CEO",
    company: "Proton Energy Africa",
    image: oti, // Replace with actual image URL
  },
];

const Speakers = () => {
//create a function to add



  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-8 text-3xl font-bold text-center">
          Speakers & Delegates
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 text-center transition"
            >
              {/* Speaker Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-48 h-48 mb-4 border-4 border-yellow-500 rounded-full"
              />
              {/* Speaker Name */}
              <h3 className="text-lg font-bold">{speaker.name}</h3>
              {/* Speaker Position */}
              <p className="text-sm text-gray-600">{speaker.position}</p>
              {/* Speaker Company */}
              <p className="text-sm text-gray-500">{speaker.company}</p>
            </div>
          ))}
        </div>
        {/* View Speaker Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 text-white transition bg-yellow-500 rounded-md hover:bg-yellow-600">
            View speaker line-up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;