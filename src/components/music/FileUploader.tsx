import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useUpload } from '../../hooks/useUpload';
import { SUPPORTED_FORMATS } from '../../utils/validation';

export function FileUploader() {
  const { uploadFile } = useUpload();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) uploadFile(file);
  }, [uploadFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  }, [uploadFile]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-purple-600" />
      <p className="text-gray-700 mb-4">
        Drag and drop your audio file here or
      </p>
      <label className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer">
        Browse Files
        <input
          type="file"
          className="hidden"
          accept={SUPPORTED_FORMATS.map(format => `.${format}`).join(',')}
          onChange={handleChange}
        />
      </label>
      <p className="text-sm text-gray-500 mt-4">
        Supported formats: {SUPPORTED_FORMATS.join(', ')}
      </p>
    </div>
  );
}