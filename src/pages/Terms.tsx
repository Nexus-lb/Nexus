import React from 'react';
import { Shield, FileText, Users, AlertTriangle, Scale, Clock } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: `By accessing and using Nexus ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These Terms of Service govern your use of our platform and constitute a legally binding agreement between you and Nexus.`
    },
    {
      id: "definitions",
      title: "Definitions",
      icon: <Scale className="w-6 h-6" />,
      content: `"Service" refers to the Nexus platform and all related services, features, and functionality. "User" or "you" refers to any individual or entity that accesses or uses our Service. "Content" includes all text, data, information, software, graphics, or other materials uploaded, downloaded, or appearing on the Service. "Account" refers to the unique account created for you to access certain features of our Service.`
    },
    {
      id: "user-accounts",
      title: "User Accounts and Registration",
      icon: <Users className="w-6 h-6" />,
      content: `To access certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.`
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use Policy",
      icon: <Shield className="w-6 h-6" />,
      content: `You agree not to use the Service to: (a) violate any applicable laws or regulations; (b) infringe upon the rights of others; (c) upload, post, or transmit any harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content; (d) attempt to gain unauthorized access to any portion of the Service; (e) interfere with or disrupt the Service or servers; (f) use the Service for any commercial purposes without our express written consent; (g) impersonate any person or entity or misrepresent your affiliation with any person or entity.`
    },
    {
      id: "content-ownership",
      title: "Content and Intellectual Property",
      icon: <FileText className="w-6 h-6" />,
      content: `You retain ownership of any intellectual property rights that you hold in content that you submit to our Service. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods. The Service and its original content, features, and functionality are and will remain the exclusive property of Nexus and its licensors.`
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      icon: <Shield className="w-6 h-6" />,
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy. We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      id: "service-availability",
      title: "Service Availability and Modifications",
      icon: <Clock className="w-6 h-6" />,
      content: `We strive to maintain the availability of our Service, but we cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We may also impose limits on certain features and services or restrict your access to parts or all of the Service without notice or liability. We reserve the right to update and change the Service from time to time to reflect changes in technology, industry practices, patterns of use, and other factors.`
    },
    {
      id: "termination",
      title: "Termination",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms. You may also terminate your account at any time by contacting us. Upon termination, your right to use the Service will cease immediately, and any data associated with your account may be deleted.`
    },
    {
      id: "disclaimers",
      title: "Disclaimers and Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: `The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied. In no event shall Nexus be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.`
    },
    {
      id: "governing-law",
      title: "Governing Law and Dispute Resolution",
      icon: <Scale className="w-6 h-6" />,
      content: `These Terms shall be interpreted and governed by the laws of the jurisdiction in which our company is incorporated, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association. You agree to submit to the personal jurisdiction of the courts located within our jurisdiction for the purpose of litigating all such claims or disputes.`
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: <FileText className="w-6 h-6" />,
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.`
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Users className="w-6 h-6" />,
      content: `If you have any questions about these Terms of Service, please contact us through our official support channels. We are committed to addressing your concerns and providing clarification on any aspect of these terms. Your feedback helps us improve our service and ensure that our terms remain clear and fair for all users.`
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
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100 mb-6">
              Clear, comprehensive guidelines for using our platform
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Important Notice
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Please read these Terms of Service carefully before using our platform. 
                  These terms contain important information about your rights and obligations 
                  when using Nexus. By accessing or using our service, you acknowledge that 
                  you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors group"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </span>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {index + 1}.
                    </span>
                    <span className="ml-2 text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {section.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
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

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-2xl shadow-xl p-8 mt-12 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                We're here to help clarify any questions you may have about our Terms of Service. 
                Our team is committed to transparency and ensuring you understand your rights and responsibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/privacy"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mt-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                  Acknowledgment
                </h3>
                <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
                  By using Nexus, you acknowledge that you have read these Terms of Service, 
                  understand them, and agree to be bound by them. If you do not agree to these terms, 
                  you must not access or use our Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;