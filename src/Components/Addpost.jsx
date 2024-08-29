/* eslint-disable no-unused-vars */
import React from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { PiArticleNyTimesFill } from 'react-icons/pi';

function Addpost() {
  return (
    <div className='flex justify-center items-start pt-20'> 
      <div className='w-[555px] bg-[#1B1F23] shadow-lg rounded-lg p-4'>
        <form>
          <div className='flex items-center justify-center space-x-3 mb-3'>
            <button>
              <img
                className="w-12 h-12 bg-cover object-cover rounded-full"
                src='https://media.licdn.com/dms/image/v2/D5603AQGfbxCTl_fkKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721126936887?e=1730332800&v=beta&t=nvoDafov61WwG5KQ_K7PrO2ASB5yW8_vxFdcNi3xnxI'
                alt="User Profile"
              />
            </button>
            <input
              className="h-8 p-3 border rounded-full w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Start a post, try writing with AI"
              aria-label="Post Input"
            />
          </div>
        </form>
        <div className='flex items-center justify-between space-x-9 p-1 text-[#B5B6B7] pl-9 pr-10'>
          <button className="flex items-center space-x-1">
            <MdPhotoSizeSelectActual className="text-xl text-blue-400" />
            <span className="text-xs">Media</span>
          </button>
          <button className="flex items-center space-x-1">
            <BsFillCalendarEventFill className="text-xl text-orange-200" />
            <span className="text-xs">Events</span>
          </button>
          <button className="flex items-center space-x-1 text-orange-300">
            <PiArticleNyTimesFill className="text-xl" />
            <span className="text-xs">Write article</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addpost;
