'use client';
import React from 'react';

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);
  if (!data) {
    throw new Error('useSoundEnabled must be used within a SoundEnabledProvider');
  }
  return data;
}

export default SoundEnabledProvider;
