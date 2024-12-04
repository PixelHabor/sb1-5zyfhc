import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const jobPaths = [
  {
    id: '1',
    title: 'Full Stack Developer',
    description: 'Master both front-end and back-end development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
    salary: '$70,000 - $120,000',
    companies: ['Google', 'Microsoft', 'Amazon']
  },
  {
    id: '2',
    title: 'Data Scientist',
    description: 'Analyze data and build machine learning models',
    skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
    salary: '$80,000 - $140,000',
    companies: ['Facebook', 'Netflix', 'IBM']
  },
  // Add more paths...
];

export function JobPaths() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Career Paths</h1>
      
      <div className="grid gap-6">
        {jobPaths.map((path) => (
          <div key={path.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="text-blue-600" size={24} />
                  <h2 className="text-xl font-semibold">{path.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{path.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Required Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill) => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Salary Range:</span> {path.salary}
                  </div>
                  <div>
                    <span className="font-semibold">Top Companies:</span> {path.companies.join(', ')}
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-400" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}