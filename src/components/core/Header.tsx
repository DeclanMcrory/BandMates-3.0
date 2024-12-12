import React from 'react';
import { Music4 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Music4 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">BandMates</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Create</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Help</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}