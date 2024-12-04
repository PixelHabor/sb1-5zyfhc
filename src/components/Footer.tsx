import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About SkillTube</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/forum" className="text-gray-600 hover:text-gray-900">Forum</Link></li>
              <li><Link to="/discord" className="text-gray-600 hover:text-gray-900">Discord</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
              <li><Link to="/copyright" className="text-gray-600 hover:text-gray-900">Copyright</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              <li><a href="https://youtube.com" className="text-gray-600 hover:text-gray-900">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© 2024 SkillTube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}