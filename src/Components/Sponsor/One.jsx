import React from "react";
import power from "../../Assets/img/federal-ministry-of-power-logo.webp";
import lag from "../../Assets/img/lagos-state-government-logo-(1).webp";
import skipper from "../../Assets/img/seal-of-quality-skipper-logo.webp";
import elec from '../../Assets/img/ie-logo-.webp'
import tcn from '../../Assets/img/tcn-logo- (1).webp'

function One() {
  return (
    <section>
      {/* patronage */}
      <div className="">
        <div className="container px-4 py-20 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-1">
            {/* <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-bold text-teal-800">
                UNDER THE PATRONAGE OF
              </h1>
              <img src={power} alt="Federal Ministry of Power" className="w-48" />
            </div> */}
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-bold text-teal-800">HOST CITY</h1>
              <img
                src={lag}
                alt="Lagos State Government"
                className="w-48"
              />
            </div>
            {/* <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-bold text-teal-800">MAIN SPONSOR</h1>
              <img
                src={skipper}
                alt="Skipper Seal of Quality"
                className="w-48"
              />
            </div> */}
            {/* <div>
            <h1 className="mb-4 text-4xl font-bold text-teal-800">HOST UTILITIES</h1>
            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3">
                <img src={elec} alt="" />
                <img src={tcn} alt="" />
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default One;

