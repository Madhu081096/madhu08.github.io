import React from 'react';
import { Brain, Code, Cloud, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Deep Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["CNNs", "RNNs", "Transformers", "Diffusion Models", "Generative Models"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Classical ML",
      icon: <Code className="w-6 h-6" />,
      skills: ["K-Means", "SVD", "GMM", "HMM", "Traditional Neural Networks"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "ML-Ops",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "Dagster", "Azure", "GCP"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Languages & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "C++", "PostgreSQL", "HTML", "CSS"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const frameworks = ["PyTorch"];
  const libraries = ["OpenCV", "Pandas", "Hugging Face", "LangChain"];
  const applications = [
    "Image Super-Resolution", "Image Classification", "Object Detection",
    "Image Segmentation", "Depth Estimation", "Neural Network Design & Optimization"
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{category.title}</h3>
              <ul className="space-y-1">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-600 text-sm">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Framework</h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {framework}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Libraries & Toolkits</h3>
            <div className="flex flex-wrap gap-2">
              {libraries.map((library, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {library}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Applications</h3>
            <div className="flex flex-wrap gap-2">
              {applications.map((app, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;