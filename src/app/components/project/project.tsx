const ProjectsSection = () => {
    return (
      <section id="projects" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of Project 1.</p>
              <img 
              src="https://img.freepik.com/premium-photo/efficient-10-minute-timer-quick-tasks_1199394-68294.jpg?w=740" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Digital-Clock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            
            
            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
              <p className="mb-4">A brief description of Project 2.</p>
              <img 
              src="https://img.freepik.com/premium-vector/digital-number-frame-blue_10876-319.jpg?w=900" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Countdown-Timer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
              <p className="mb-4">A brief description of Project 3.</p>
              <img 
              src="https://img.freepik.com/premium-photo/modern-calculator-futuristic-tech-background-concept-fintech-business-finance_1074775-5329.jpg?w=1060" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Simple-Calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
                        {/* Project 4 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of Project 1.</p>
              <img 
              src="https://img.freepik.com/premium-photo/creative-modern-business-social-media-post-design-template_1251574-4553.jpg?w=740" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Next-js-assigment-2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
                        {/* Project 5 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of Project 1.</p>
              <img 
              src="https://i.pinimg.com/736x/f7/06/78/f706784838be36b789036e7eef880a71.jpg" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Assignment-6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
                        {/* Project 6 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of Project 1.</p>
              <img 
              src="https://i.pinimg.com/736x/55/e9/a1/55e9a1ea67fadeebfd9c9134f0629c05.jpg" 
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/Javariaansari/Assignment7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;