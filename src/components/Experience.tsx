import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Staff Engineer, Machine Learning",
      company: "Vimaan Robotica Private India Ltd., Bengaluru",
      type: "experience"
    },
    {
      title: "Project Associate",
      company: "Healthcare Technology Innovation Centre, IIT-M, Research Park, Chennai",
      type: "experience"
    },
    {
      title: "Project Associate",
      company: "Image Processing & Computer Vision Lab, IIT-M, Chennai",
      type: "experience"
    },
    {
      title: "Intern",
      company: "PSG Institute of Advanced Studies, Coimbatore",
      type: "experience"
    }
  ];

  const education = [
    {
      degree: "MS by Research, Electrical Engineering",
      institution: "Indian Institute of Technology, Madras",
      type: "education"
    },
    {
      degree: "BE Instrumentation & Control Engineering",
      institution: "PSG College of Technology",
      type: "education"
    }
  ];

  const courses = [
    "Pattern Recognition and Machine Learning", "Computer Vision", 
    "Geometry & Photometry based Computer vision", "Advanced Digital Signal Processing",
    "Probability Foundations for Electrical Engineers", "Mathematical methods in System Engineering", 
    "Convex optimization", "Medical Image Analysis"
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience & Education</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500 text-white rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-500 text-white rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Relevant Courses</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;