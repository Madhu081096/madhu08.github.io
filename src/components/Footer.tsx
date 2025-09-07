import React from 'react';
import { Mail, MapPin, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6">
            Interested in collaborating or discussing machine learning projects? Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:kkm81096@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/madhumithra-krishnamoorthy-49981a153/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex justify-center items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Madhu Mithra K K</span>
          </div>
          <p className="text-gray-500 mt-2">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;