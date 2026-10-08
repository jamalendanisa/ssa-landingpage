import React from 'react';
import Marquee from "react-fast-marquee";
import config from '../config/index.json';

const Clients = () => {
  const { clients } = config;
  const { title, items: clientsList, waNo, logoWa } = clients;
  return (
    <div className={`py-12 bg-background mt-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            {title}
          </h2>
        </div>

        <div className="mt-10">
          <Marquee>
            {clientsList.map((client) => (   
              <div key={client.name}>
                <img
                    className="h-10 pl-10 pr-10"
                    src={client.img}
                    alt="client image"
                    />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto">
        <a href={waNo} target="_blank" rel="noopener noreferrer">
          <img alt="logo-wa" className="h-16 w-auto sm:h-16" src={logoWa}
          style={{position: 'fixed', right: '25px', bottom: '35px'}} />
        </a>
      </div>
    </div>
  );
};

export default Clients;
