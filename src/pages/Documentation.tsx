import { useState } from 'react';
import { 
  Book, 
  Code, 
  Database, 
  Settings, 
  Zap, 
  Shield, 
  Layers, 
  Download, 
  Github, 
  Terminal, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Lightbulb,
  Globe,
  Mail
} from 'lucide-react';

const Documentation = () => {
  const [expandedSection, setExpandedSection] = useState<string>('overview');

  const techStack = [
    { name: 'React 18', category: 'Frontend', description: 'Modern React with hooks and context' },
    { name: 'TypeScript', category: 'Language', description: 'Type-safe JavaScript development' },
    { name: 'Vite', category: 'Build Tool', description: 'Fast development and build tool' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS framework' },
    { name: 'React Router', category: 'Routing', description: 'Declarative routing for React' },
    { name: 'Supabase', category: 'Backend', description: 'PostgreSQL database and auth' },
    { name: 'EmailJS', category: 'Services', description: 'Email delivery service' },
    { name: 'Lucide React', category: 'Icons', description: 'Beautiful & consistent icons' },
    { name: 'React Hot Toast', category: 'UI', description: 'Toast notifications' },
    { name: 'Zod', category: 'Validation', description: 'TypeScript-first schema validation' }
  ];

  const features = [
    {
      category: 'Authentication System',
      items: [
        'Multi-step signup process with email verification',
        'User type selection (Entrepreneur, Investor, General)',
        'OTP verification via EmailJS',
        'Password strength validation',
        'Secure login/logout functionality',
        'Supabase authentication integration'
      ]
    },
    {
      category: 'User Interface',
      items: [
        'Dark/Light theme toggle with persistence',
        'Responsive design for all screen sizes',
        'Modern gradient backgrounds and animations',
        'Interactive components with hover effects',
        'Toast notifications for user feedback',
        'Accessibility-friendly design patterns'
      ]
    },
    {
      category: 'Content Management',
      items: [
        'Blog system with categories and filtering',
        'Rich text content with HTML support',
        'Image optimization and responsive images',
        'Search functionality across content',
        'Pagination for large content lists'
      ]
    },
    {
      category: 'Business Features',
      items: [
        'Investor-Entrepreneur matching platform',
        'Contact forms with rate limiting',
        'Help center with categorized FAQs',
        'Comprehensive legal pages (Terms, Privacy)',
        'Feature showcase and testimonials',
        'Multi-step onboarding experience'
      ]
    }
  ];

  const architectureComponents = [
    {
      name: 'Frontend Application',
      description: 'React-based SPA with TypeScript',
      tech: ['React 18', 'TypeScript', 'Vite'],
      responsibilities: ['User Interface', 'State Management', 'Routing', 'Client-side Logic']
    },
    {
      name: 'Authentication Layer',
      description: 'Supabase Auth with custom flows',
      tech: ['Supabase Auth', 'React Context', 'EmailJS'],
      responsibilities: ['User Registration', 'Login/Logout', 'Email Verification', 'Session Management']
    },
    {
      name: 'Database Layer',
      description: 'PostgreSQL via Supabase',
      tech: ['Supabase', 'PostgreSQL', 'Row Level Security'],
      responsibilities: ['User Profiles', 'Data Persistence', 'Security Policies']
    },
    {
      name: 'Styling System',
      description: 'Tailwind CSS with custom themes',
      tech: ['Tailwind CSS', 'CSS Variables', 'Dark Mode'],
      responsibilities: ['Responsive Design', 'Theme Management', 'Component Styling']
    }
  ];

  const sections = [
    { id: 'overview', title: 'Project Overview', icon: <Book className="w-5 h-5" /> },
    { id: 'architecture', title: 'Architecture', icon: <Layers className="w-5 h-5" /> },
    { id: 'features', title: 'Features', icon: <Zap className="w-5 h-5" /> },
    { id: 'tech-stack', title: 'Technology Stack', icon: <Code className="w-5 h-5" /> },
    { id: 'setup', title: 'Setup & Installation', icon: <Settings className="w-5 h-5" /> },
    { id: 'database', title: 'Database Schema', icon: <Database className="w-5 h-5" /> },
    { id: 'api', title: 'API Reference', icon: <Terminal className="w-5 h-5" /> },
    { id: 'deployment', title: 'Deployment', icon: <Globe className="w-5 h-5" /> }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexus Documentation</h1>
            <p className="text-xl text-blue-100 mb-8">
              Complete technical documentation for the Nexus investor-entrepreneur platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#setup"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Quick Start
              </a>
              <a
                href="https://github.com/azfar-2/Nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                      expandedSection === section.id
                        ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-8">
            {/* Project Overview */}
            {expandedSection === 'overview' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What is Nexus?</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Nexus is a modern web platform designed to bridge the gap between visionary entrepreneurs and strategic investors. 
                      Built with cutting-edge technologies, it provides a seamless experience for users to connect, collaborate, and 
                      transform groundbreaking ideas into reality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Objectives</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        Connect entrepreneurs with compatible investors based on mutual interests
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        Provide a secure, user-friendly platform for business networking
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        Offer comprehensive resources and educational content
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        Create a community-driven ecosystem for innovation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Project Vision</h4>
                        <p className="text-blue-700 dark:text-blue-400 text-sm">
                          To become the premier platform where ideas and investors converge, fostering a global 
                          ecosystem of innovation and sustainable business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Architecture */}
            {expandedSection === 'architecture' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">System Architecture</h2>
                </div>

                <div className="grid gap-6">
                  {architectureComponents.map((component, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{component.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{component.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {component.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Responsibilities:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300">
                          {component.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-center mb-1">
                              <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {expandedSection === 'features' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Features & Functionality</h2>
                </div>

                <div className="space-y-6">
                  {features.map((featureCategory, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{featureCategory.category}</h3>
                      <div className="grid gap-3">
                        {featureCategory.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            {expandedSection === 'tech-stack' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technology Stack</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Package.json Dependencies</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <p><strong>Production:</strong> React, TypeScript, Vite, Tailwind CSS, React Router, Supabase, EmailJS, Lucide React, React Hot Toast, Zod</p>
                    <p><strong>Development:</strong> ESLint, TypeScript ESLint, Autoprefixer, PostCSS</p>
                  </div>
                </div>
              </div>
            )}

            {/* Setup & Installation */}
            {expandedSection === 'setup' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Setup & Installation</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Prerequisites</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Node.js 18+ and npm
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Supabase account and project
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        EmailJS account for email services
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Installation Steps</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-green-400 font-mono text-sm">
                        <div className="mb-2"># Clone the repository</div>
                        <div>git clone https://github.com/azfar-2/Nexus.git</div>
                        <div>cd Nexus</div>
                        <div className="mt-4"># Install dependencies</div>
                        <div>npm install</div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Environment Variables</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">Create a <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env</code> file with the following variables:</p>
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-green-400 font-mono text-sm">
                          <div>VITE_SUPABASE_URL=your_supabase_url</div>
                          <div>VITE_SUPABASE_ANON_KEY=your_supabase_anon_key</div>
                          <div>VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id</div>
                          <div>VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id</div>
                          <div>VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Start Development Server</h4>
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-green-400 font-mono text-sm">
                          <div>npm run dev</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Database Schema */}
            {expandedSection === 'database' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Database Schema</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Profiles Table</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200 dark:border-gray-600 rounded-lg">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white">Column</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white">Type</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr>
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-mono">id</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">uuid</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Primary key, references auth.users</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-mono">full_name</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">text</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">User's full name</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-mono">user_type</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">text</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">entrepreneur | investor | general</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-mono">created_at</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">timestamptz</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Account creation timestamp</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-mono">updated_at</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">timestamptz</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Last update timestamp</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security Policies</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                          <h4 className="font-semibold text-green-800 dark:text-green-300">Row Level Security (RLS)</h4>
                        </div>
                        <p className="text-green-700 dark:text-green-400 text-sm">
                          Enabled on profiles table to ensure users can only access their own data
                        </p>
                      </div>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                          Users can view their own profile (SELECT policy)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                          Users can update their own profile (UPDATE policy)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                          Automatic updated_at timestamp trigger
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* API Reference */}
            {expandedSection === 'api' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">API Reference</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authentication Endpoints</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded mr-3 font-mono">POST</span>
                          <code className="text-gray-900 dark:text-white">/auth/signup</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">Create a new user account with email verification</p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          <strong>Body:</strong> name, email, userType, password, confirmPassword
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded mr-3 font-mono">POST</span>
                          <code className="text-gray-900 dark:text-white">/auth/verify-otp</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">Verify email with OTP code</p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          <strong>Body:</strong> email, otp
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded mr-3 font-mono">POST</span>
                          <code className="text-gray-900 dark:text-white">/auth/login</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">Authenticate user credentials</p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          <strong>Body:</strong> email, password
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supabase Integration</h3>
                    <div className="space-y-3">
                      <p className="text-gray-600 dark:text-gray-300">
                        The application uses Supabase for authentication and database operations:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500" />
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mr-2">supabase.auth.signUp()</code>
                          - User registration
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500" />
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mr-2">supabase.auth.signInWithPassword()</code>
                          - User login
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500" />
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mr-2">supabase.auth.signOut()</code>
                          - User logout
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500" />
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mr-2">supabase.auth.verifyOtp()</code>
                          - Email verification
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Deployment */}
            {expandedSection === 'deployment' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Deployment Guide</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Build for Production</h3>
                    <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-green-400 font-mono text-sm mb-4">
                      <div># Build the application</div>
                      <div>npm run build</div>
                      <div className="mt-2"># Preview the build</div>
                      <div>npm run preview</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deployment Options</h3>
                    <div className="grid gap-4">
                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Vercel (Recommended)</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          Zero-configuration deployment with automatic builds from GitHub
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          1. Connect GitHub repository to Vercel<br/>
                          2. Add environment variables in Vercel dashboard<br/>
                          3. Deploy automatically on every push
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Netlify</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          Simple deployment with continuous integration
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          Build command: <code>npm run build</code><br/>
                          Publish directory: <code>dist</code>
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">GitHub Pages</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          Free hosting for public repositories
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                          Use GitHub Actions for automated deployment from the dist folder
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start">
                      <Settings className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Environment Variables</h4>
                        <p className="text-amber-700 dark:text-amber-400 text-sm">
                          Remember to configure all required environment variables in your deployment platform:
                          Supabase URL/Key, EmailJS credentials, and any other service keys.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Follow our setup guide to get Nexus running locally, or check out the live demo to see it in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/azfar-2/Nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;