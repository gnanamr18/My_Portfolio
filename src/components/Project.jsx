import React from 'react';
import Data from '../data/Data';

export default function Project() {
  return (
    <div className="grid grid-col-1 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      {Data.map((project, index) => (
        <div key={index} className="bg-white max-w-sm p-4 shadow-lg rounded-lg">
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="font-bold text-xl mt-2">{project.name}</h2>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
            Visit Project
          </a>
        </div>
      ))}
    </div>
  );
}
