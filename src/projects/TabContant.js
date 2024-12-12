import React, { useState } from 'react';

const TabContant = () => {
  const [tabActive, setTabActive] = useState(null);

  const Data = [
    { id: 1, Name: "Haider Aly", Dec: "Front-End Developer" },
    { id: 2, Name: "Professional Stack", Dec: "MERN Stack" },
    { id: 35, Name: "Enthusiast", Dec: "AI / ML Python" },
  ];

  const handleTab = (id) => {
    setTabActive(tabActive === id ? null : id);
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-xl mb-4">Single Page Tabs</h2>
      <div className="flex border-b">
        {Data.map((item) => (
          <div
            key={item.id}
            className={`flex-1 text-center py-2 cursor-pointer ${tabActive === item.id ? 'bg-gray-200' : ''
              }`}
            onClick={() => handleTab(item.id)}
          >
            <h1 className="text-lg">{item.Name}</h1>
          </div>
        ))}
      </div>
      <div className="p-4 border">
        {tabActive !== null && (
          <div className="text-center text-lg">
            {Data.find((item) => item.id === tabActive)?.Dec}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContant;
