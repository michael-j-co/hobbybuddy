import React, { createContext, useState, useContext } from 'react';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState({
    source: require('../../assets/dog.png'), // Default avatar
    name: 'Friendly Frank', // Default avatar name
    accessory: null, // No accessory selected by default
    background: null, // No background selected by default
  });

  // Function to update accessories & backgrounds
  const updateAvatarCustomization = ({ accessory, background }) => {
    setSelectedAvatar((prev) => ({
      ...prev,
      accessory: accessory || prev.accessory,
      background: background || prev.background,
    }));
  };

  return (
    <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar, updateAvatarCustomization }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
