import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Send, Cpu, Wifi, Zap, Settings, Radio, Brain, Code, BarChart } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { featuredProjects, certificates, skills } from './content';


interface Interest {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image?: string;
  github: string;
  live?: string;
  status?: string;
  tech?: string[];
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  // EmailJS Configuration (Add your credentials later)
 const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
};

  useEffect(() => {
    setIsVisible(true);
  }, []);


const interests: Interest[] = [
  { name: "Embedded Systems", icon: Cpu, color: '#FF6B6B' },
  { name: "IoT Development", icon: Wifi, color: '#4ECDC4' },
  { name: "Microcontrollers", icon: Zap, color: '#45B7D1' },
  { name: "Automation", icon: Settings, color: '#FECA57' },
  { name: "Telecommunication Networks", icon: Radio, color: '#0077b6' },
  { name: "VLSI Design", icon: Cpu, color: '#FFD166' }, // Use Cpu for now
  { name: "Wireless Communication", icon: Wifi, color: '#9D4EDD' },
  { name: "Circuit Design", icon: Settings, color: '#43aa8b' },
  { name: "Machine Learning", icon: Brain, color: '#FF9FF3' },
  { name: "Software Development", icon: Code, color: '#F95D6A' },
  { name: "Data Science", icon: BarChart, color: '#4ECDC4' },
];


  const socialLinks = [
  { icon: Github, url: 'https://github.com/Nirmalagk20', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/nirmala-kankanwadi-9547b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:nirmalagk52@gmail.com', label: 'Email' }
];


  // Add proper event types
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Niramala Kankanwadi',
        },
        EMAILJS_CONFIG.publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);

    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Top Spacing */}
      <div className="h-2.5"></div>
      
      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8 transform hover:scale-105 transition-transform duration-700">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-spin group-hover:animate-pulse">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 relative group-hover:text-white transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full animate-pulse group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-500"></div>
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">NK</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce group-hover:bg-yellow-300 transition-colors duration-300"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-pulse group-hover:bg-pink-300 transition-colors duration-300"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 transform transition-all duration-1000" style={{ animationDelay: '300ms' }}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 cursor-default">
                Nirmala Kankanwadi
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 transform hover:text-white transition-colors duration-300">Electronics and Telecommunication Engineering</p>
              <p className="text-base sm:text-lg text-gray-400 transform hover:text-gray-300 transition-colors duration-300">📍 Bagalkot, Karnataka</p>
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto">
  <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">About Me</h3>
  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
    Electronics and Telecommunication Engineering student with expertise in embedded systems, IoT, and microcontroller programming. </p>
</div>


            {/* Social Links - Circle Style */}
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 border border-gray-600/30 hover:border-blue-500/50 flex items-center justify-center transform hover:-translate-y-1"
                  title={social.label}
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  <social.icon size={20} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
<section className="py-12 sm:py-20 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
      Education
    </h2>
    <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="flex flex-col gap-4">
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">Sir M Visvesvaraya Institute Of Technology</h3>
          <p className="text-base sm:text-lg text-gray-300">B.E in Electronics And Telecommunication Engineering</p>
          <p className="text-gray-400">Bangalore, India</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-400">CGPA: 7.9</span>
          <span className="text-gray-400">2022 - Present</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tools I Use
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12">My technical expertise</p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-3 bg-gray-800/50 backdrop-blur-lg rounded-full border border-gray-600/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 cursor-default"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <img 
      src={skill.logo} 
      alt={`${skill.name} logo`}
      className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300"
    />
                <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800/50 backdrop-blur-lg rounded-full p-1 border border-gray-600/30">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'text-white bg-blue-600 shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Featured Projects
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'certificates'
                    ? 'text-white bg-blue-600 shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Certificates
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'projects' && (
              <div className="space-y-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                  {featuredProjects.map((project, index) => (
                    <div
                      key={index}
                      className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600/30 hover:border-blue-500/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-32 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/800x400?text=Project+Preview';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 text-left">{project.title}</h3>
                          <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full border border-green-500/30 whitespace-nowrap ml-2">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm text-left">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-start">
                          {project.tech?.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30 border border-gray-600/50 hover:border-blue-500/50 text-sm group transform hover:scale-105"
                        >
                          <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                          <span>View Code</span>
                          <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600/30 hover:border-blue-500/50 transition-all duration-700"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/800x400?text=Certificate';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-blue-400">{cert.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{cert.issuer} • {cert.date}</p>
                      <p className="text-sm text-gray-300 mt-2">{cert.description}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-sm text-blue-400 hover:text-blue-300"
                        >
                          View Certificate <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Interests
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12">What drives my passion</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 sm:p-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-default"
                style={{
                animationDelay: `${index * 50}ms`,
                ['--interest-color' as string]: interest.color
              } as React.CSSProperties}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-lg"
                  style={{ 
                    backgroundColor: interest.color + '20',
                    border: `2px solid ${interest.color}30`
                  }}
                >
                  <interest.icon size={24} style={{ color: interest.color }} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                  {interest.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-8">
              <div className="flex items-start gap-3 w-full sm:w-auto">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">EMAIL</p>
                  <a href="mailto:poojakullolli55@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    nirmalagk52@gmail.com
                  </a>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600/50"></div>
              <div className="flex items-start gap-3 w-full sm:w-auto">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">LOCATION</p>
                  <span className="text-gray-300 text-sm sm:text-base">Bagalkot, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-600/30 max-w-2xl mx-auto">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <label className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your name"
                />
              </div>
              <div className="text-left">
                <label className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6 text-left">
              <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none disabled:opacity-50"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black/50 border-t border-gray-600/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/70 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-600/30 hover:border-blue-500/50 flex items-center justify-center"
                >
                  <social.icon size={20} className="text-blue-400" />
                </a>
              ))}
            </div>
            <div className="text-center text-gray-400">
              <p className="text-sm sm:text-base">&copy; 2025 Nirmala Kankanwadi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

interface FormData {
  name: string;
  email: string;
  message: string;
}
