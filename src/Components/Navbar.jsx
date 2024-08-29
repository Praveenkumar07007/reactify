/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoAppsOutline } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";


function Navbar({ data }) {
    return (
        <div className="h-[52px] fixed w-full bg-[#1B1F23] flex justify-center items-center px-4">
            {/* Logo and Search Bar */}
            <div className="flex items-center h-10 gap-5 ">
                <img
                    src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-zuq9koir.png"
                    alt="Logo"
                    className="h-8 w-8 object-cover"
                />
                <form action="">
                    <div>
                        <input 
                            className="h-8  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Search" 
                        />
                    </div>
                </form>
            </div>

            {/* Centered Navigation Icons */}
            <div className="flex items-center gap-10 text-[#B5B6B7] pl-9 pr-10">
                <button className="flex flex-col items-center space-y-1">
                    <GoHomeFill className="text-xl" />
                    <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                    <FaUserFriends className="text-xl" />
                    <span className="text-xs">My Network</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                    <BiSolidShoppingBags className="text-xl" />
                    <span className="text-xs">Jobs</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                    <AiFillMessage className="text-xl" />
                    <span className="text-xs">Messages</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                    <IoNotifications className="text-xl" />
                    <span className="text-xs">Notifications</span>
                </button>
                <button>
                    <img
                        className="w-12 h-12 bg-cover object-cover rounded-full"
                        src='https://media.licdn.com/dms/image/v2/D5603AQGfbxCTl_fkKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721126936887?e=1730332800&v=beta&t=nvoDafov61WwG5KQ_K7PrO2ASB5yW8_vxFdcNi3xnxI'
                        alt="Profile"
                    />
                </button>
            </div>

            {/* Right-aligned Buttons */}
            <div className="flex  text-[#B5B6B7]">
                <button className="flex flex-col items-center space-y-1">
                    <IoAppsOutline className="text-xl" />
                    <span className="text-xs">For Business</span>
                </button>
                <div className="w-20">
                    <button className="flex flex-row items-center space-y-1">
                        <MdWorkspacePremium className="text-xl w-20" />
                        <span className="text-[10px]">Get Hired with Premium</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
