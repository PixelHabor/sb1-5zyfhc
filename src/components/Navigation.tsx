import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-1">
            <span className="text-xl font-semibold">SkillTube</span>
          </Link>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Search skills and courses"
                className="w-full px-4 py-2 bg-gray-100 rounded-l-full border border-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-200 rounded-r-full hover:bg-gray-200">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="flex items-center gap-2 text-blue-600 border border-blue-600 rounded-full px-4 py-1.5 hover:bg-blue-50"
          >
            <User size={20} />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </header>
  );
}