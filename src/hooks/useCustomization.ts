import { useState, useCallback } from 'react';
import type { CustomizationState, VisualStyle, ColorScheme, Texture, Theme } from '../types';

const initialState: CustomizationState = {
  style: 'minimalist',
  colorScheme: 'monochrome',
  texture: 'matte',
  theme: 'industrial'
};

export function useCustomization() {
  const [state, setState] = useState<CustomizationState>(initialState);

  const updateStyle = useCallback((style: VisualStyle) => {
    setState(prev => ({ ...prev, style }));
  }, []);

  const updateColorScheme = useCallback((colorScheme: ColorScheme) => {
    setState(prev => ({ ...prev, colorScheme }));
  }, []);

  const updateTexture = useCallback((texture: Texture) => {
    setState(prev => ({ ...prev, texture }));
  }, []);

  const updateTheme = useCallback((theme: Theme) => {
    setState(prev => ({ ...prev, theme }));
  }, []);

  return {
    ...state,
    updateStyle,
    updateColorScheme,
    updateTexture,
    updateTheme
  };
}