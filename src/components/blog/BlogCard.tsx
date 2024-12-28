import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-blue-600 font-medium">{post.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-3">{post.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 font-medium">
            Read More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;