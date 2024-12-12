import React from 'react';
import { FileMusic, Settings, X } from 'lucide-react';
import { formatFileSize } from '../../utils/formatting';
import { UploadState } from '../../types';

interface UploadProgressProps {
  file: File;
  progress: number;
  onCancel: () => void;
}

export function UploadProgress({ file, progress, onCancel }: UploadProgressProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 text-gray-700">
          <FileMusic className="w-5 h-5" />
          <span>{file.name}</span>
          <span className="text-sm text-gray-500">
            ({formatFileSize(file.size)})
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-purple-600 hover:text-purple-700">
            <Settings className="w-5 h-5" />
          </button>
          <button 
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}