import React from 'react';
import { Search } from 'lucide-react';

const skills = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, and modern frameworks',
    level: 'Beginner',
    duration: '40 hours',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    id: '2',
    title: 'Data Science',
    description: 'Master Python, statistics, and machine learning',
    level: 'Intermediate',
    duration: '60 hours',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  },
  // Add more skills...
];

export function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Skills Library</h1>
        <div className="relative">
          <input
            type="search"
            placeholder="Search skills..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={skill.thumbnail}
              alt={skill.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {skill.level}
                </span>
                <span className="text-gray-600">{skill.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}