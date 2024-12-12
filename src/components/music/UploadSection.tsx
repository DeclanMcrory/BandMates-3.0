import React from 'react';
import { Upload, FileMusic, Settings } from 'lucide-react';

export function UploadSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Track</h2>
              <p className="text-gray-600">Supported formats: MP3, WAV, FLAC</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <p className="text-gray-700 mb-4">Drag and drop your audio file here or</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Browse Files
              </button>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <FileMusic className="w-5 h-5" />
                  <span>track_name.mp3</span>
                </div>
                <button className="text-purple-600 hover:text-purple-700">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}