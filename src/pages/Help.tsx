import { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Settings, 
  Shield, 
  CreditCard, 
  Users, 
  Zap, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink, 
  Clock, 
  AlertCircle, 
  Book, 
  Video, 
  Download, 
  Headphones 
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6" />,
      description: 'Learn the basics of using Nexus',
      color: 'bg-green-500',
      articles: 12
    },
    {
      id: 'account',
      title: 'Account & Settings',
      icon: <Settings className="w-6 h-6" />,
      description: 'Manage your account and preferences',
      color: 'bg-blue-500',
      articles: 8
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: <Shield className="w-6 h-6" />,
      description: 'Keep your account safe and secure',
      color: 'bg-purple-500',
      articles: 6
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Subscription and payment information',
      color: 'bg-orange-500',
      articles: 5
    },
    {
      id: 'collaboration',
      title: 'Team & Collaboration',
      icon: <Users className="w-6 h-6" />,
      description: 'Working with teams and sharing',
      color: 'bg-indigo-500',
      articles: 9
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <AlertCircle className="w-6 h-6" />,
      description: 'Fix common issues and problems',
      color: 'bg-red-500',
      articles: 7
    }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create my first project in Nexus?',
      answer: 'To create your first project, log into your Nexus account and click the "New Project" button on your dashboard. Choose a project template that best fits your needs, give your project a name, and click "Create". You\'ll be guided through a setup wizard to configure your project settings.'
    },
    {
      category: 'getting-started',
      question: 'What are the system requirements for using Nexus?',
      answer: 'Nexus is a web-based platform that works on any modern browser including Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend using the latest version of your preferred browser with JavaScript enabled. No additional software installation is required.'
    },
    {
      category: 'account',
      question: 'How do I change my password?',
      answer: 'Go to your Account Settings by clicking on your profile picture in the top right corner, then select "Settings". Navigate to the "Security" tab and click "Change Password". Enter your current password and your new password twice, then click "Update Password".'
    },
    {
      category: 'account',
      question: 'Can I change my email address?',
      answer: 'Yes, you can change your email address in your Account Settings under the "Profile" tab. Click "Edit Profile", update your email address, and click "Save Changes". You\'ll receive a verification email at your new address to confirm the change.'
    },
    {
      category: 'security',
      question: 'How do I enable two-factor authentication?',
      answer: 'To enable 2FA, go to Account Settings > Security tab. Click "Enable Two-Factor Authentication" and follow the instructions to set up authentication using your preferred method (authenticator app, SMS, or email). This adds an extra layer of security to your account.'
    },
    {
      category: 'security',
      question: 'What should I do if my account is compromised?',
      answer: 'If you suspect your account has been compromised, immediately change your password, enable two-factor authentication, and contact our support team. Review your recent account activity and remove any unauthorized access. We recommend using a strong, unique password for your Nexus account.'
    },
    {
      category: 'billing',
      question: 'How do I upgrade my subscription plan?',
      answer: 'To upgrade your plan, go to Account Settings > Billing tab. Click "Change Plan" and select the plan you want to upgrade to. Review the changes and click "Upgrade Now". The new features will be available immediately, and you\'ll be charged a prorated amount for the current billing period.'
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners. You can update your payment method anytime in your billing settings.'
    },
    {
      category: 'collaboration',
      question: 'How do I invite team members to my project?',
      answer: 'Open your project and click the "Team" or "Share" button. Enter the email addresses of team members you want to invite, select their permission level (Viewer, Editor, or Admin), and click "Send Invitations". They\'ll receive an email invitation to join your project.'
    },
    {
      category: 'troubleshooting',
      question: 'Why is Nexus running slowly?',
      answer: 'Slow performance can be caused by several factors: poor internet connection, browser cache issues, or high system load. Try refreshing the page, clearing your browser cache, closing unnecessary tabs, or switching to a different browser. If issues persist, contact our support team.'
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-green-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message about your issue',
      icon: <Mail className="w-8 h-8" />,
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-blue-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri, 9AM-6PM EST',
      action: 'Call Now',
      color: 'bg-purple-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and find solutions',
      icon: <Users className="w-8 h-8" />,
      availability: 'Always active',
      action: 'Visit Forum',
      color: 'bg-orange-500'
    }
  ];

  const resources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Video className="w-6 h-6" />,
      count: '25+ videos'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive technical docs',
      icon: <Book className="w-6 h-6" />,
      count: '50+ articles'
    },
    {
      title: 'API Reference',
      description: 'Developer API documentation',
      icon: <FileText className="w-6 h-6" />,
      count: 'Full reference'
    },
    {
      title: 'Downloads',
      description: 'Mobile apps and tools',
      icon: <Download className="w-6 h-6" />,
      count: 'Latest versions'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <Headphones className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers, get support, and learn how to make the most of Nexus
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-0 shadow-lg focus:ring-2 focus:ring-white/20 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${category.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FileText className="w-4 h-4 mr-1" />
                      {category.articles} articles
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 group">
                <div className={`inline-flex p-4 ${option.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {option.description}
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {option.availability}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or browse our categories above.
              </p>
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 dark:text-blue-400">
                      {resource.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {resource.count}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Explore
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Don't hesitate to reach out 
            if you can't find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;