import React from 'react';
import { StyleSelector } from './StyleSelector';
import { ThemeSelector } from './ThemeSelector';
import { Settings, Sliders } from 'lucide-react';
import { useCustomization } from '../../hooks/useCustomization';

export function CustomizationPanel() {
  const {
    updateStyle,
    updateColorScheme,
    updateTexture,
    updateTheme
  } = useCustomization();

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customize Your Experience</h2>
            <p className="text-purple-200">Personalize every aspect of your virtual band performance</p>
          </div>

          <div className="grid gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Visual Preferences
              </h3>
              <StyleSelector
                onStyleChange={updateStyle}
                onColorChange={updateColorScheme}
                onTextureChange={updateTexture}
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sliders className="w-6 h-6" />
                Theme Selection
              </h3>
              <ThemeSelector onThemeChange={updateTheme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}