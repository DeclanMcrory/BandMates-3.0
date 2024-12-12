import React from 'react';
import { Palette, Minimize, Shapes } from 'lucide-react';

type VisualStyle = 'minimalist' | 'bold' | 'avant-garde';
type ColorScheme = 'neon' | 'monochrome' | 'earth';
type Texture = 'matte' | 'glossy' | 'metallic' | 'textured';

interface StyleSelectorProps {
  onStyleChange: (style: VisualStyle) => void;
  onColorChange: (color: ColorScheme) => void;
  onTextureChange: (texture: Texture) => void;
}

export function StyleSelector({ onStyleChange, onColorChange, onTextureChange }: StyleSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Visual Style
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {(['minimalist', 'bold', 'avant-garde'] as VisualStyle[]).map((style) => (
            <button
              key={style}
              onClick={() => onStyleChange(style)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors capitalize"
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Minimize className="w-5 h-5" />
          Color Palette
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {(['neon', 'monochrome', 'earth'] as ColorScheme[]).map((scheme) => (
            <button
              key={scheme}
              onClick={() => onColorChange(scheme)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors capitalize"
            >
              {scheme}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shapes className="w-5 h-5" />
          Texture
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {(['matte', 'glossy', 'metallic', 'textured'] as Texture[]).map((texture) => (
            <button
              key={texture}
              onClick={() => onTextureChange(texture)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors capitalize"
            >
              {texture}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}