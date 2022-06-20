import React from "react";

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "Accra",
    },
    {
      id: 2,
      title: "Nigeria",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button 
        key={city.id} 
        className="text-white text-lg font-medium"
        onClick={() => setQuery({q:city.title})}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
