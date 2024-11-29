import { useState } from 'react';
import { Home, User, Code, Send, Download } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation Component
  const Navigation = () => {
    const navItems = [
      { icon: Home, label: 'Home', section: 'home' },
      { icon: User, label: 'About', section: 'about' },
      { icon: Code, label: 'Projects', section: 'projects' },
      { icon: Send, label: 'Contact', section: 'contact' }
    ];

    return (
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full p-2 flex space-x-6 z-50">
        {navItems.map((item) => (
          <button 
            key={item.section}
            onClick={() => setActiveSection(item.section)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              activeSection === item.section 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-blue-100'
            }`}
            aria-label={item.label}
          >
            <item.icon size={24} />
          </button>
        ))}
      </nav>
    );
  };

  // Home Section
  const HomeSection = () => (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="max-w-2xl">
        <img 
          src="assets/react.svg" 
          alt="Profile" 
          className="rounded-full w-48 h-48 mx-auto mb-6 object-cover border-4 border-blue-500"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Ernest Frimpong
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Software Developer | Full Stack Engineer | Tech Innovator
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/resume.pdf" 
            download 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center"
          >
            <Download className="mr-2" /> Download CV
          </a>
          <button 
            onClick={() => setActiveSection('contact')}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );

  // About Section
  const AboutSection = () => {
    const skills = [
      'JavaScript', 'React', 'Node.js', 'Python', 
      'TypeScript', 'Docker', 'AWS', 'HTML', 'CSS', 'Dart',
      'React Native', 'Firebase', 'MySQL', 'Next.js',
      'Figma', 'Webpack', 'MongoDB', 'Postgres',
      'Bootstrap', 'Material UI', 'Tailwind CSS',
      'Web3.js', 'Vue.js', 'Canva', 'JQuery', 'Vercel',
      'Express.js', 'Npm', 'Yarn', 'Flutter',
      'Oracle', 'Render', 'EJS', 'Adobe Photoshop'
    ];

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-4">
                I'm a passionate software developer with 5+ years of experience 
                creating innovative web and mobile applications. My expertise lies 
                in full-stack development, with a focus on creating scalable and 
                user-friendly digital solutions.
              </p>
              <p className="text-gray-600">
                I thrive on challenging projects that push the boundaries of 
                technology and user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Projects Section
  const ProjectsSection = () => {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
      },
      {
        title: 'Task Management App',
        description: 'Real-time collaborative task management application',
        technologies: ['React', 'Firebase', 'TypeScript'],
        link: '#'
      },
      {
        title: 'Machine Learning Dashboard',
        description: 'Interactive dashboard for machine learning model insights',
        technologies: ['Python', 'Django', 'Plotly'],
        link: '#'
      }
    ];

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic
      console.log('Form submitted:', formData);
      alert('Message sent! I will get back to you soon.');
    };

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Contact Me
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Render Active Section
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'home': return <HomeSection />;
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {renderActiveSection()}
      <Navigation />
    </div>
  );
};

export default App;