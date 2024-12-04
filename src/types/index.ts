export interface User {
  id: string;
  name: string;
  email: string;
  progress: number;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  thumbnail: string;
}

export interface JobPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salary: string;
  companies: string[];
}