import React from 'react';
import Navbar from './Navbar';
import Albumitem from './Albumitem';
import { albumsData, healsData } from '../assets/assets';
import HealsItem from './HealsItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-6 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {healsData.map((item, index) => (
            <HealsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </div>

      {/* ini yang menurun */}
      {/* <div className="my-5 font-bold text-2xl">
        {albumsData.map((item, index) => (
          <Albumitem key={index} name={item.name} id={item.id} image={item.image} />
        ))}
      </div> */}
    </>
  );
};

export default DisplayHome;
