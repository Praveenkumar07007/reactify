/* eslint-disable no-unused-vars */
// import React, { useRef, useState } from 'react';
// import NewCard from './Components/NewCard';
// import Navbaar from './Components/Navbaar';

// // function App() {
// //   const data = [
// //     {image:'https://images.unsplash.com/photo-1656525673244-cc022d930db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     name:'power',
// //     artist:'Praveen',
// //     added:false},

// //     {image:'https://images.unsplash.com/photo-1617803021651-8df9d37672a6?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     name:'humans',
// //     artist:'Ritviz',
// //     added:false},

// //     {image:'https://images.unsplash.com/photo-1553236152-72dd67ab92ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     name:'Boys',
// //     artist:'Akshat',
// //     added:true},

// //     {image:'https://images.unsplash.com/photo-1581190413988-89cbf448719f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     name:'aayana',
// //     artist:'salone',
// //     added:false},
// //   ];

// //   const [songData , setSongData] =useState(data);

// //   const handleClick = (index) =>{
// //     setSongData((prev)=>{
// //       return prev.map((item,itemindex)=>{
// //         if(itemindex === index) return {...item,added:!item.added};
// //         return item;
// //       })
// //     })
// //   }

// //   return (
// //     <div className='w-full h-screen bg-zinc-300 '>
// //       <Navbaar data={songData} />
// //       <div className='px-20 flex gap-10 mt-10 flex-wrap '>
// //         {songData.map((obj,index)=>(
// //           <NewCard key={index} index = {index} data={obj} handleClick={handleClick}/>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// function App() {

//   const name =  useRef(null);
//   const age = useRef(null);
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//   }

//   return (
    
//       <form action="" onSubmit={handleSubmit}>
//         <input ref={name} type="text" name="" id="" placeholder='name' />
//         <input ref={age} type="number" name="" id=""  placeholder='age' />
//         <input type="submit" />
//       </form>
//   )
// }

// export default App

import React from 'react'
import { Link } from 'react-router-dom'
import Linkedincards from './Components/Linkedincards'
import Navbar from './Components/Navbar'
import Addpost from './Components/Addpost'
import Card from './Components/Card'
import Usercard from './Components/Usercard'

function App() {

  const data = [
    {
      image : 'https://media.licdn.com/dms/image/v2/D5622AQHLYgYFYG0KHg/feedshare-shrink_1280/feedshare-shrink_1280/0/1724601933113?e=1727308800&v=beta&t=mSdTegAnVGFRfQ--mBu0tz7Woqj4GHMB2VKPxnqvCS0',
      postDescription:"It s awesome to be back here at Alexa after my excellent experience during last year’s internship, now with even more responsibility and chances to make an impact. I’d like to thank my family and friends for being a pillar of strength, encouragement and belief. The placement cell at IIT Patna also deserves a round of applause for their invaluable efforts.",
      comments:0,
      like:0,
      name:'Yash PantYash Pant',
      isFollowing:true,
      userDescription:"IIT Patna CSE'24 | SDE @ Amazon | Specialist on Codeforces |",
      userImage:'https://media.licdn.com/dms/image/v2/C4D03AQFEU3a3n8HGCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649776364458?e=1730332800&v=beta&t=MZD7HU6htiQxDdxclaoF7ykzyKS00OvbX06jLd_GCRU'
      ,uploadTime :'10 minutes ago'
    },
    {
      image : 'https://media.licdn.com/dms/image/v2/D5622AQEbJexHrTZZGg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1724656613125?e=1727308800&v=beta&t=l8lb4X-ZeBUelX6ry_xRubNxml2AMxEaRhbf7S3ZXEM',
      postDescription:"Again a bit late to the party, but still worth sharing. I had an amazing time in my B. Tech Convocation ceremony last December. I graduated from Indian Institute of Technology (Indian School of Mines), Dhanbad last year in May 2023. ",
      comments:0,
      like:0,
      name:'Abhishek Kumar J',
      isFollowing:true,
      userDescription:"ICPC World Finalist 2022 | Gold Medalist, IIT(ISM) CSE'23 | D. E. Shaw India | Master, Codeforces | 6 Star, Codechef",
      userImage:'https://media.licdn.com/dms/image/v2/D4D03AQFwU3dZY30eLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678264601264?e=1730332800&v=beta&t=3ldRvQPY1RO58Y6KkP755HrujtXNXCpm4MjiZISKUjw'
      ,uploadTime :'50 minutes ago'
    },
    {
      image : 'https://media.licdn.com/dms/image/v2/D5622AQHrXV6Qe_tDow/feedshare-shrink_800/feedshare-shrink_800/0/1724582545324?e=1727308800&v=beta&t=Z-fZour2DI-4lvMXTIkMkFctEJNMINVzbqaE6eYkybM',
      postDescription:"As someone passionate about global education, I believe immersion and exchange programs are transformative experiences. Here are five key benefits: Enhanced Language Skills: Immersing in a new culture significantly boosts language proficiency, opening doors to global communication and understanding.",
      comments:0,
      like:0,
      name:'Arjun Kaushik',
      isFollowing:true,
      userDescription:'Principal Director at IASEA ll Turnaround Educationist ll Entrepreneur',
      userImage:'https://media.licdn.com/dms/image/v2/D5603AQGfbbnmQNrZHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718475812243?e=1730332800&v=beta&t=1KIWCdCLTHiREmQZBCscAfbvRZ7Y5gj2zp6fny2bQug'
      ,uploadTime :'5 hours ago'
    },
    {
      image : 'https://media.licdn.com/dms/image/v2/D4D22AQGiD3WG0AsOIQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1724301562291?e=1727308800&v=beta&t=H5sGLyd8h_N5iA7JqSOoY4keAcm8zQXijX-tZLPus3Y',
      postDescription:"Ever wondered how ads seem to know exactly what you're thinking? It's all about the magic of targeted advertising.1. Cookies and Tracking Pixels: These tiny bits of code track your online behavior, collecting data on your interests, preferences, and browsing history.",
      comments:0,
      like:0,
      name:'Jaimiii PanchalJaimiii Panchal',
      isFollowing:true,
      userDescription:"CEO| Digital Marketing Expert | Business & Personal Brand Strategist | Content Marketing | SEO Specialist & Content Writer | Helped 488+ businesses to increase online brand presence",
      userImage:'https://media.licdn.com/dms/image/v2/D4D03AQG5FWFojyvUow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708339315064?e=1730332800&v=beta&t=VxzTiNgABefsTNDIPwxe17ODhd_YeybJzaKPunZOuGc'
      ,uploadTime :'2 days ago'
    },
    {
      image : 'https://media.licdn.com/dms/image/v2/D5622AQE5lTL29mjWnw/feedshare-shrink_1280/feedshare-shrink_1280/0/1724664704892?e=1727308800&v=beta&t=vTYh_lIfiwPvpiaGgg_XiYdXX3vleH0DAsBMCRmRAn8',
      postDescription:"80 AI Tools to Finish Hours of Work in Minutes: 2. 𝐂𝐨𝐝𝐢𝐧𝐠 𝐓𝐨𝐨𝐥𝐬:DeepCode, Amazon CodeWhisperer, Android Studio Bot, Codiga, CodeWP",
      comments:0,
      like:0,
      name:'Shruti MishraShruti Mishra',
      isFollowing:true,
      userDescription:"Join me to Learn how to Supercharge your daily Life with AI | 100k+ on Twitter/X | Helping Founders Launch & Market SaaS / AI products",
      userImage:'https://media.licdn.com/dms/image/v2/D5603AQEHdRqQ0s-TEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720189464079?e=1730332800&v=beta&t=gYxDH2hv7WPpZPcm8RW9fd_5y26grtWqUPHOww3hzvE'
      ,uploadTime :'13 Aug'
    }

  ]


  return (
    <>
    <div className='bg-black'>
    <Navbar/>
    <div className='flex start'>
    <Usercard/>
    <Addpost/>
    </div>
    <Linkedincards data={data} />
    </div>
    </>
  )
}

export default App