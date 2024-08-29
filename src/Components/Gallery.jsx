/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

function Gallery() {
    const [val, updateval] = useState(false);
    return (
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
            <div className='relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden'>
                <img
                    className={`shrink-0 transition-transform ${val === false ? "translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
                    src="https://images.unsplash.com/photo-1723569575972-e669a0917cd8?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    className={`shrink-0 transition-transform ${val === false ? "translate-x-[0%]" : "translate-x-[100%]"} w-full h-full object-cover`}
                    src="https://images.unsplash.com/photo-1723296637578-95124ce6024b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <span
                    onClick={() => updateval(!val)}
                    className='w-8 h-8 absolute flex items-center bg-[#dadada7b] rounded-full justify-center bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%]'
                >
                    <FaArrowRight size={"0.7em"} />
                </span>
            </div>
        </div>
    );
}

export default Gallery;
