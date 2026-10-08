import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, contact } = config;
  const { logo, name: companyName } = company;
  const { items: contactList  } = contact;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-auto h-16" />
        </div>
          <div className="mt-10">
          <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-5">
            {contactList.map((contact) => (
              <div key={contact.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {contact.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {contact.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default About;
