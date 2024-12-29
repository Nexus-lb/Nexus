import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogHeroProps {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, author, date, category, image }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/30 dark:from-gray-900/90 dark:to-gray-900/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 text-white/80 mb-4">
            <span className="flex items-center gap-2">
              <User size={16} />
              {author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {date}
            </span>
            <span className="flex items-center gap-2">
              <Tag size={16} />
              {category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlogHero;