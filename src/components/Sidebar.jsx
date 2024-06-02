import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col text-white hidden lg:flex">
      <div className="bg-[#88304E] h-[18%] mb-1 rounded flex flex-col justify-around">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#88304E] h-[85%] rounded">
        <div className=" p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <div className="font-semibold">Your Library</div>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4 m-2" src={assets.plus_icon} alt="" />
            <img className="w-4 m-2" src={assets.arrow_icon} alt="" />
          </div>
        </div>
        <div className="p-4 m-2 text-white bg-[#522546] rounded-xl font-semibold flex flex-col items-start justify-end gap-1">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="px-4 py-1.5 mt-2 bg-[#311D3F] rounded-full text-[15px] text-white">Create Playlist</button>
        </div>
        <div className="p-4 m-2 text-white bg-[#522546] rounded-xl font-semibold flex flex-col items-start justify-end gap-1">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 mt-2 bg-[#311D3F] rounded-full text-[15px] text-white">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
