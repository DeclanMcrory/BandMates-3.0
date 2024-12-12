import { useState, useCallback } from 'react';
import { UploadState } from '../types';
import { validateFile } from '../utils/validation';

const initialState: UploadState = {
  file: null,
  progress: 0,
  status: 'idle',
  error: undefined
};

export function useUpload() {
  const [state, setState] = useState<UploadState>(initialState);

  const uploadFile = useCallback(async (file: File) => {
    const validation = validateFile(file);
    
    if (!validation.valid) {
      setState(prev => ({ ...prev, error: validation.error, status: 'error' }));
      return;
    }

    setState(prev => ({ ...prev, file, status: 'uploading', error: undefined }));

    // Simulated upload progress
    const interval = setInterval(() => {
      setState(prev => {
        if (prev.progress >= 100) {
          clearInterval(interval);
          return { ...prev, status: 'complete' };
        }
        return { ...prev, progress: prev.progress + 10 };
      });
    }, 500);
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    ...state,
    uploadFile,
    reset
  };
}