import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            MADHU MITHRA K K
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            ML Engineer | Computer Vision Specialist | Deep Learning Expert
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-blue-200">
            <a
              href="mailto:kkm81096@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              kkm81096@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Tamil Nadu, India
            </div>
            <a
              href="https://www.linkedin.com/in/madhumithra-krishnamoorthy-49981a153/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;