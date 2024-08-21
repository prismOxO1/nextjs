import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-black border-t-2 border-t-custom-darkgreen h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white text-3xl pb-6">
							Forge<span className="text-custom-green font-semibold"> Creative</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600 duration-200" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 duration-200" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Service</p>
						<li className="text-white text-md pb-2 hover:text-custom-green cursor-pointer duration-200">
							Web Development
						</li>
						<li className="text-white text-md pb-2 hover:text-custom-green cursor-pointer duration-200">
							SEO optomization
						</li>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							Domain & Hosting
						</li>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							Maintance
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Agency</p>
						<li className="text-white text-md pb-2 hover:text-custom-green cursor-pointer duration-200">
							About
						</li>
						<li className="text-whitetext-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							Projects
						</li>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							custom
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Support</p>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							Contact
						</li>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							Support Portals
						</li>
						<li className="text-white text-md pb-2  hover:text-custom-green cursor-pointer duration-200">
							List Of Charges
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-black">
				<h1 className=" text-white">
					© 2024 All rights reserved | Forge <span className="text-custom-green font-semibold cursor-pointer">Creative{" "}
					</span> 
				</h1>
			</div>
		</>
	);
}

export default Footer;
