import React from 'react';
import { FileText, ExternalLink, Github } from 'lucide-react';

const Publication = () => {
  return (
    <section id="publication" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Publication</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-500 text-white rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Reference-Based Texture Transfer for MRI Super-Resolution
                </h3>
                <p className="text-lg text-indigo-600 font-medium mb-4">IEEE ISBI 2021</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Developed a reference-based, unpaired multi-contrast texture transfer strategy for deep learning-based 
              in-plane and across-plane super-resolution of MRI spine images. Achieved significant improvements over 
              baseline architectures and published the work in IEEE ISBI 2021.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ieeexplore.ieee.org/document/9433961"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                Read Paper
              </a>
              <a
                href="https://github.com/Madhu081096/Reference-based-MRI-superresolution-using-texture-transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;