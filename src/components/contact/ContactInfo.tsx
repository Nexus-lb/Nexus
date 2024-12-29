import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@nexus.com',
    href: 'mailto:support@nexus.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1-234-567-890',
    href: 'tel:+1234567890'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Innovation Street, Tech Valley, CA 94043',
    href: 'https://maps.google.com/?q=123+Innovation+Street+Tech+Valley+CA+94043'
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactDetails.map((detail) => (
        <a
          key={detail.label}
          href={detail.href}
          className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
        >
          <div className="flex-shrink-0">
            <detail.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {detail.label}
            </p>
            <p className="text-base font-medium text-gray-900 dark:text-white">
              {detail.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;