import React from 'react';
import { Sparkles, Leaf, Factory } from 'lucide-react';

type Theme = 'cyberpunk' | 'eco-friendly' | 'industrial';

interface ThemeSelectorProps {
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelector({ onThemeChange }: ThemeSelectorProps) {
  const themes: Array<{ id: Theme; icon: React.ReactNode; description: string }> = [
    {
      id: 'cyberpunk',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'Neon-lit urban aesthetics with futuristic elements'
    },
    {
      id: 'eco-friendly',
      icon: <Leaf className="w-6 h-6" />,
      description: 'Natural elements with sustainable design principles'
    },
    {
      id: 'industrial',
      icon: <Factory className="w-6 h-6" />,
      description: 'Raw materials and mechanical aesthetics'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {themes.map(({ id, icon, description }) => (
        <button
          key={id}
          onClick={() => onThemeChange(id)}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <span className="text-lg font-semibold capitalize">{id}</span>
          </div>
          <p className="text-sm text-purple-200">{description}</p>
        </button>
      ))}
    </div>
  );
}