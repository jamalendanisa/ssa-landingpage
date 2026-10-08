import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:top-36 lg:right-0 lg:w-1/2 lg:p-20 ">
      <img
        className="h-auto w-full object-cover lg:w-full lg:h-auto"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
