import React from 'react';
import { BarChart, Calendar, Award } from 'lucide-react';

export function Progress() {
  const progress = {
    completedCourses: 12,
    totalHours: 45,
    currentStreak: 7,
    skills: [
      { name: 'HTML/CSS', progress: 85 },
      { name: 'JavaScript', progress: 70 },
      { name: 'React', progress: 60 },
      { name: 'Node.js', progress: 40 },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-blue-600" size={24} />
            <h2 className="text-lg font-semibold">Completed Courses</h2>
          </div>
          <p className="text-3xl font-bold">{progress.completedCourses}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <BarChart className="text-blue-600" size={24} />
            <h2 className="text-lg font-semibold">Total Hours</h2>
          </div>
          <p className="text-3xl font-bold">{progress.totalHours}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="text-blue-600" size={24} />
            <h2 className="text-lg font-semibold">Current Streak</h2>
          </div>
          <p className="text-3xl font-bold">{progress.currentStreak} days</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Skills Progress</h2>
        <div className="space-y-6">
          {progress.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}