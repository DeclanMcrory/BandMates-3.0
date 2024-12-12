export type VisualStyle = 'minimalist' | 'bold' | 'avant-garde';
export type ColorScheme = 'neon' | 'monochrome' | 'earth';
export type Texture = 'matte' | 'glossy' | 'metallic' | 'textured';
export type Theme = 'cyberpunk' | 'eco-friendly' | 'industrial';

export interface CustomizationState {
  style: VisualStyle;
  colorScheme: ColorScheme;
  texture: Texture;
  theme: Theme;
}

export interface UploadState {
  file: File | null;
  progress: number;
  status: 'idle' | 'uploading' | 'processing' | 'complete' | 'error';
  error?: string;
}