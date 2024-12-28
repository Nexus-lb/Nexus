import React from 'react';
import { Tag } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

interface BlogFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
      <Tag size={20} className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
      <button
        onClick={() => onCategoryChange('')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
          ${selectedCategory === '' 
            ? 'bg-blue-600 dark:bg-blue-500 text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedCategory === category.id 
              ? 'bg-blue-600 dark:bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default BlogFilters;