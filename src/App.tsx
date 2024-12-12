import React from 'react';
import { Header } from './components/core/Header';
import { Hero } from './components/core/Hero';
import { UploadSection } from './components/music/UploadSection';
import { CustomizationPanel } from './components/customization/CustomizationPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <UploadSection />
      <CustomizationPanel />
    </div>
  );
}

export default App;