import React from 'react';
import { Shield, Eye, Lock, Database, Users, Mail, Clock, AlertTriangle, CheckCircle, Globe, FileText, Settings } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "January 1, 2024";

  const privacySections = [
    {
      id: "overview",
      title: "Privacy Overview",
      icon: <Eye className="w-6 h-6" />,
      content: `This Privacy Policy explains how Nexus ("we", "our", or "us") collects, uses, processes, and protects your personal information when you use our platform. We are committed to protecting your privacy and ensuring transparency about our data practices. This policy applies to all users of our services, including entrepreneurs, investors, and general users who access our platform.`
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, or contact us. This includes your name, email address, user type (entrepreneur/investor/general), password (encrypted), and any additional profile information you choose to provide. We also automatically collect certain information when you use our services, including your IP address, browser type, device information, and usage patterns through cookies and similar technologies.`
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <Settings className="w-6 h-6" />,
      content: `We use your information to provide, maintain, and improve our services, including facilitating connections between entrepreneurs and investors, personalizing your experience, and communicating with you about our services. We also use this information to ensure platform security, prevent fraud, comply with legal obligations, and conduct research and analytics to enhance our platform's functionality and user experience.`
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <Users className="w-6 h-6" />,
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in limited circumstances: with your explicit consent, to comply with legal obligations, to protect our rights and safety or that of others, with service providers who assist us in operating our platform (under strict confidentiality agreements), and in connection with business transfers such as mergers or acquisitions, where you will be notified beforehand.`
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: <Lock className="w-6 h-6" />,
      content: `We implement robust security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure data transmission protocols, regular security assessments, access controls and authentication measures, and staff training on data protection practices. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: "user-rights",
      title: "Your Privacy Rights",
      icon: <Shield className="w-6 h-6" />,
      content: `You have several rights regarding your personal information: the right to access and review your personal data, the right to correct or update inaccurate information, the right to delete your account and associated data, the right to restrict or object to certain processing activities, the right to data portability where applicable, and the right to withdraw consent for data processing based on consent. To exercise these rights, please contact us through our support channels.`
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      icon: <Globe className="w-6 h-6" />,
      content: `We use cookies, web beacons, and similar tracking technologies to enhance your experience on our platform. These technologies help us remember your preferences, understand how you use our services, and provide personalized content. You can control cookie settings through your browser preferences, though disabling certain cookies may affect the functionality of our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted or expired).`
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: <Clock className="w-6 h-6" />,
      content: `We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is typically retained for the duration of your account's existence and for a reasonable period thereafter. Communication records are kept for customer service purposes and legal compliance. We periodically review and delete unnecessary data in accordance with our retention policies.`
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: <Globe className="w-6 h-6" />,
      content: `If you are located outside the jurisdiction where our servers are hosted, your information may be transferred to, stored, and processed in different countries. We ensure that such transfers are conducted in accordance with applicable data protection laws and implement appropriate safeguards to protect your information during international transfers. We will notify you of any significant changes to our data transfer practices.`
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: <Shield className="w-6 h-6" />,
      content: `Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly. If you believe that we might have information from or about a child under 13, please contact us immediately.`
    },
    {
      id: "third-party-services",
      title: "Third-Party Services and Links",
      icon: <FileText className="w-6 h-6" />,
      content: `Our platform may contain links to third-party websites, services, or applications that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access through our platform. We may also integrate with third-party services (such as email service providers) to enhance our platform's functionality, and we ensure these integrations comply with our privacy standards.`
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our platform and, where appropriate, by sending you an email notification. Your continued use of our services after any changes indicates your acceptance of the updated policy. We encourage you to review this policy periodically.`
    }
  ];

  const dataTypes = [
    {
      category: "Account Information",
      items: ["Full name", "Email address", "User type (entrepreneur/investor/general)", "Account preferences", "Profile information"]
    },
    {
      category: "Technical Data",
      items: ["IP address", "Browser type and version", "Device information", "Operating system", "Usage analytics"]
    },
    {
      category: "Communication Data",
      items: ["Contact form submissions", "Email correspondence", "Support tickets", "Feedback and surveys"]
    },
    {
      category: "Platform Usage",
      items: ["Login/logout times", "Pages visited", "Features used", "Search queries", "Interaction patterns"]
    }
  ];

  const securityMeasures = [
    {
      title: "Encryption",
      description: "End-to-end encryption for sensitive data transmission and storage",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access permissions",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Regular Audits",
      description: "Periodic security assessments and vulnerability testing",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Data Minimization",
      description: "Collection and processing of only necessary information",
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 mb-6">
              Your privacy is our priority. Learn how we protect and manage your personal information.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Privacy at a Glance
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What We Collect</h3>
                    <p className="text-sm">Only information necessary to provide our services and improve your experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How We Use It</h3>
                    <p className="text-sm">To facilitate connections, enhance security, and personalize your experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Who We Share With</h3>
                    <p className="text-sm">We don't sell your data. Limited sharing only with your consent or for legal compliance.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Your Control</h3>
                    <p className="text-sm">You can access, update, or delete your information at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Types We Collect */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Types of Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{dataType.category}</h3>
                  <ul className="space-y-2">
                    {dataType.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Security Measures */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              How We Protect Your Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400">
                      {measure.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{measure.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{measure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Privacy Sections */}
          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 scroll-mt-20"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                    <span className="text-blue-600 dark:text-blue-400">
                      {section.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mr-3">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Your Rights Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800 rounded-2xl shadow-xl p-8 mt-12 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                You have full control over your personal information. Exercise your rights to access, 
                update, or delete your data at any time.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <Eye className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Access</h3>
                  <p className="text-green-100">View all data we have about you</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Settings className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Update</h3>
                  <p className="text-green-100">Correct or modify your information</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <AlertTriangle className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Delete</h3>
                  <p className="text-green-100">Remove your data permanently</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-2xl shadow-xl p-8 mt-12 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our privacy team is here to help. Contact us with any questions about how we handle 
                your personal information or to exercise your privacy rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="/help"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Privacy Help Center
                </a>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 mt-8">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-gray-600 dark:text-gray-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  This Privacy Policy is designed to comply with applicable privacy laws including GDPR, CCPA, 
                  and other regional privacy regulations. We regularly review and update our practices to ensure 
                  ongoing compliance with evolving privacy requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;