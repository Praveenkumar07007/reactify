/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

function Linkedincards({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-2 p-0 bg-black text-white space-y-8">
      {data.map((elem, index) => {

        const [isExpanded, setIsExpanded] = useState(false);
        const [likes, setLikes] = useState(elem.like);
        const [isFollowing,setisFollowing] = useState(true);
        // Function to toggle the full text view
        const toggleReadMore = () => {
          setIsExpanded(!isExpanded);
        };

        // Function to handle likes
        const handleLikes = () => {
          setLikes(likes + 1);
        };
        

        const postdescription = elem.postDescription || "";

        return (
          <div key={index} className="w-[555px] items-center  bg-[#1B1F23] shadow-lg rounded-lg p-4 ">
            {/* User Info Section */}
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 bg-cover object-cover rounded-full"
                src={elem.userImage}
                alt="Profile"
              />
              <div className="ml-4">
                <div className="flex items-center">
                  <h1 className="text-sm font-semibold pr-2">{elem.name}</h1>
                  <div className="w-1 h-1 bg-slate-900 rounded-full flex justify-between"></div>
                  <button onClick={()=>{setisFollowing(!isFollowing)}}>
                  <span className={`text-[#A4A5A7] text-sm ${isFollowing===true?"text-[#A4A5A7]":"text-blue-400 text-[15px] font-semibold"}`}>
                    {isFollowing?"Following":"+ Follow"}
                  </span>
                  </button>
                </div>
                <span className="text-xs text-[#A4A5A7] leading-none">{elem.userDescription}</span>
                <span className="text-xs text-[#A4A5A7] block">
                  {elem.uploadTime}
                </span>
              </div>
            </div>

            {/* Post Content Section */}
            <div className="mb-4">
              <p className="text-[14px] text-gray-200 mb-2">
                {isExpanded
                  ? postdescription
                  : `${postdescription.substring(0, 100)}...`}
                {postdescription.length > 100 && (
                  <span
                    onClick={toggleReadMore}
                    className="text-blue-500 cursor-pointer"
                  >
                    {isExpanded ? " See Less" : " See More"}
                  </span>
                )}
              </p>
              <img className="w-full h-auto " src={elem.image} alt="Post" />
            </div>

            {/* Post Stats Section */}
            <div className="flex justify-between text-xs text-[#A4A5A7] mb-2">
              <span>{likes} likes</span>
              <span>{elem.comments} comments</span>
            </div>
            <hr className="border-gray-600 mb-2" />

            {/* Action Buttons */}
            <div className="flex justify-between text-[#B5B6B7] text-sm">
              <button className="flex items-center space-x-1" onClick={handleLikes}>
                <AiFillLike />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1">
                <LiaCommentSolid />
                <span>Comments</span>
              </button>
              <button className="flex items-center space-x-1">
                <BiRepost />
                <span>Repost</span>
              </button>
              <button className="flex items-center space-x-1">
                <IoIosSend />
                <span>Send</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Linkedincards;
