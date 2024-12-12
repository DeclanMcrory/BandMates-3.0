import React from 'react';
import { Upload, Video, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Solo Into a Full Band Experience
        </h1>
        <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
          Upload your music and let our AI create stunning music videos with virtual band members performing alongside you.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
          Start Creating
        </button>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Upload className="w-12 h-12 mb-4 mx-auto text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Upload Your Track</h3>
            <p className="text-purple-200">Share your solo performance and let our AI analyze the music</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Users className="w-12 h-12 mb-4 mx-auto text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Customize Your Band</h3>
            <p className="text-purple-200">Design and customize virtual band members to match your style</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Video className="w-12 h-12 mb-4 mx-auto text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Generate Video</h3>
            <p className="text-purple-200">Create professional music videos with multiple camera angles</p>
          </div>
        </div>
      </div>
    </div>
  );
}