"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Price = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-7xl">
        {/* Centered text */}
        <div className="flex flex-col items-center justify-center p-4 text-slate-100/50">
          <h3 className="pb-2 m-0 text-2xl font-bold text-slate-700 text-center">
            Pricing Information
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* Card 1 */}
            <div className="border-2 rounded-lg border-gray-500 w-full sm:w-80 md:w-64 lg:w-80 flex-shrink-0 hover:cursor-pointer hover:opacity-60 duration-500">
              <h5 className="text-center font-semibold mt-9 text-2xl text-custom-green">1 Page Website</h5>
              <h5 className="text-center mt-2 text-2xl text-slate-500">$150 <span className="font-semibold">/ 40$ Month</span></h5>
              <div className="w-64 max-w-xs mx-auto h-0.5 bg-gray-500 mt-4 rounded-full"></div>

              <div className="p-4 text-white">
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Up and running in 2 Days</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Hosting & Maintenance</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Full functional Site</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Stunning Website</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">SEO optimization</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">1 Page Website</span></h5>
              </div>
            </div>
          </div>

            {/* Card 2 */}
            <div className="border-2 rounded-lg border-custom-green w-full sm:w-80 md:w-64 lg:w-80 flex-shrink-0 hover:cursor-pointer hover:opacity-60 duration-500">
              <div className="w-auto max-w-xs mx-auto bg-custom-green text-black font-semibold text-center">Recommend</div>
              <br/>
              <h5 className="text-center font-semibold mt-3 text-2xl text-custom-green">3 Page Website</h5>
              <h5 className="text-center mt-2 text-2xl text-slate-500">$350 <span className="font-semibold">/ 40$ Month</span></h5>
              <div className="w-64 max-w-xs mx-auto h-0.5 bg-gray-500 mt-4 rounded-full"></div>

              <div className="p-4 text-white">
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Up and running in 3 Days</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Hosting & Maintenance</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Full functional Site</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Stunning Website</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">SEO optimization</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">3 Pages Website</span></h5>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* Card 1 */}
            <div className="border-2 rounded-lg border-gray-500 w-full sm:w-80 md:w-64 lg:w-80 flex-shrink-0 hover:cursor-pointer hover:opacity-60 duration-500">
              <h5 className="text-center font-semibold mt-9 text-2xl text-custom-green">5 Page Website</h5>
              <h5 className="text-center mt-2 text-2xl text-slate-500">$550 <span className="font-semibold">/ 40$ Month</span></h5>
              <div className="w-64 max-w-xs mx-auto h-0.5 bg-gray-500 mt-4 rounded-full"></div>

              <div className="p-4 text-white">
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Up and running in 2 Days</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Hosting & Maintenance</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Full functional Site</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">Stunning Website</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">SEO optimization</span></h5>
                <h5 className="mt-3"><span className="text-custom-green"><FontAwesomeIcon icon={faCheck} /></span> <span className="pl-3">5 Page Website</span></h5>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
