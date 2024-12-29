import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RelatedPost {
  id: string;
  title: string;
  image: string;
  date: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Related Posts
      </h3>
      
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.id}`}
          className="group block"
        >
          <div className="flex gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
            </div>
          </div>
        </Link>
      ))}
      
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
      >
        View All Posts <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default RelatedPosts;