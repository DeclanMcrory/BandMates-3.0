import { UploadState } from '../types';

export const SUPPORTED_FORMATS = ['mp3', 'wav', 'flac'];
export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

export function validateFile(file: File): { valid: boolean; error?: string } {
  const extension = file.name.split('.').pop()?.toLowerCase();
  
  if (!extension || !SUPPORTED_FORMATS.includes(extension)) {
    return {
      valid: false,
      error: `Unsupported file format. Please upload ${SUPPORTED_FORMATS.join(', ')} files.`
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: 'File size exceeds 100MB limit.'
    };
  }

  return { valid: true };
}