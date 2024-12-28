import React, { useState } from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogSearch from '../components/blog/BlogSearch';
import BlogFilters from '../components/blog/BlogFilters';
import BlogCard from '../components/blog/BlogCard';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogPagination from '../components/blog/BlogPagination';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../components/utils/blog';

const FEATURED_POST = {
  title: "How We Helped 100 Startups Raise $50M in 2023",
  summary: "Learn about the success stories of startups that leveraged Nexus to connect with investors and achieve their funding goals.",
  image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1470",
  date: "March 15, 2024",
  readTime: "8 min read"
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      
      <div className="container mx-auto px-4 py-12">
        <BlogSearch onSearch={setSearchQuery} />
        
        <BlogFilters
          categories={BLOG_CATEGORIES}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="mb-12">
          <FeaturedPost {...FEATURED_POST} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Blog;