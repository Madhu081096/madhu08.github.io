import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "PDF Reader using LangChain & GPT-OSS",
      description: "Built an intelligent PDF reader leveraging LangChain and GPT-OSS to enable context-aware querying and summarization of documents. Utilized FAISS as a vector database to store chunked PDF embeddings generated using Sentence-Transformer (all-mpnet-base-v2).",
      techStack: ["LangChain", "GPT-OSS", "FAISS", "Sentence-Transformers", "all-mpnet-base-v2", "Python"],
      appLink: "https://huggingface.co/spaces/madhu0810/pdf_reader",
      codeLink: "https://github.com/Madhu081096/langchain_pdf_reader"
    },
    {
      title: "Simulation and Automatic Detection of Artifacts in MRI Images",
      description: "Collaborated with GE Healthcare data scientists and researchers to simulate artifacts in MRI images and developed algorithms to automatically classify images based on the severity of artifacts.",
      techStack: ["MRI Imaging", "Image Processing", "Artifact Simulation", "Image Classification", "Python", "PyTorch"]
    },
    {
      title: "MediSinGAN – Medical Data Generation using GAN (EEML 2021, Budapest)",
      description: "Collaborated with 6 international participants during EEML'21 to simulate synthetic medical data by training a Generative Adversarial Network (GAN) on a single training image, enabling efficient medical data generation.",
      techStack: ["GANs", "Medical Image Synthesis", "Deep Learning", "PyTorch", "Python"],
      codeLink: "https://github.com/CREVIOS/MediSinGAN"
    },
    {
      title: "Vertebrae-Level Fracture Classification using CT Images",
      description: "Collaborated with Eindhoven Medical Robotics to classify vertebrae-level fractures from CT images. Developed Digitally Reconstructed Radiographs (DRR) from CT volumes to enable accurate fracture classification.",
      techStack: ["Medical Imaging", "CT Image Analysis", "DRR Reconstruction", "Image Classification", "Python", "PyTorch"]
    },
    {
      title: "Real-Time Machine Vision System for Industrial Component Analysis",
      description: "Designed and developed a real-time machine vision system for critical dimension analysis of industrial components. Implemented Canny edge detection for precise dimension measurement of industrial sleeves and deployed the solution on a Raspberry Pi.",
      techStack: ["Machine Vision", "Edge Detection", "Image Processing", "Raspberry Pi", "OpenCV", "Python"]
    },
    {
      title: "Machine Learning-Driven Alloy Design for Additive Manufacturing",
      description: "Proposed a workflow combining machine learning and physical simulation to design alloys optimized for additive manufacturing. Focused on developing a machine learning model to predict alloy properties based on composition.",
      techStack: ["Machine Learning", "Predictive Modeling", "Data Analysis", "Python", "Scikit-learn", "Pandas", "NumPy"],
      codeLink: "https://github.com/Madhu081096/ML-for-AM"
    }
  ];

  const academicProjects = [
    {
      title: "UNet-Based Vertebrae Segmentation using Fuzzy C-Means Prior",
      description: "Developed a medical image segmentation pipeline to segment vertebrae in MRI images using fuzzy C-means clustering as a prior to a UNet architecture.",
      techStack: ["Medical Image Analysis", "Image Segmentation", "Fuzzy C-Means", "UNet", "Python", "PyTorch"]
    },
    {
      title: "MRI Brain Cancer Classification using Support Vector Machine",
      description: "Extracted GLCM texture features from MRI brain images and applied a Support Vector Machine (SVM) classifier to distinguish between cancerous and non-cancerous MRI scans.",
      techStack: ["Medical Imaging", "Texture Analysis", "GLCM Features", "SVM", "MATLAB"]
    },
    {
      title: "Continuous Digit Recognition using Concatenated HMMs",
      description: "Implemented an isolated digit recognition system on recorded audio clips using Hidden Markov Models (HMMs) and extended it to continuous digit recognition through concatenated HMMs.",
      techStack: ["Speech Recognition", "HMMs", "Audio Processing", "Python", "C++"]
    },
    {
      title: "Sorting and Grading of Tomatoes using K-Means and SVM",
      description: "Developed a sorting and grading system for tomatoes based on size and ripening levels. Used K-means clustering for image segmentation and applied an SVM classifier to categorize tomatoes into quality grades.",
      techStack: ["Image Processing", "K-Means Clustering", "SVM", "Python", "OpenCV"]
    }
  ];

  const ProjectCard = ({ project, isFeatured = false }: { project: any, isFeatured?: boolean }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isFeatured ? 'border-l-4 border-blue-500' : ''}`}>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech: string, index: number) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {project.appLink && (
          <a
            href={project.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isFeatured={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></div>
            Academic Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;