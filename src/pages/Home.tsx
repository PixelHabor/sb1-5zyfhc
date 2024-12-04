import React from 'react';
import { Play, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to SkillTube</h1>
        <p className="text-xl text-gray-600 mb-8">Master new skills with our curated video courses</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/skills" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Browse Skills</h2>
            <p className="text-gray-600">Explore our library of skills and start learning today</p>
          </Link>
          
          <Link to="/paths" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Career Paths</h2>
            <p className="text-gray-600">Find the perfect learning path for your dream job</p>
          </Link>
          
          <Link to="/progress" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-600">Monitor your learning journey and achievements</p>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? '1498050108023-c5249f4df085' : 
                  i === 2 ? '1633356122102-3884a5fca0ac' : 
                  i === 3 ? '1542831371-29b0f74f9713' : 
                  '1526374965328-7f61d4dc18c5'}`}
                alt="Course thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  {i === 1 ? 'Web Development Fundamentals' :
                   i === 2 ? 'Data Science Essentials' :
                   i === 3 ? 'UI/UX Design Principles' :
                   'Machine Learning Basics'}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Play size={16} className="mr-1" />
                  <span>12 lessons</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}