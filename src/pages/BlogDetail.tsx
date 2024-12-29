import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogHero from '../components/blog/BlogDetail/BlogHero';
import ShareButtons from '../components/blog/BlogDetail/ShareButtons';
import CommentSection from '../components/blog/BlogDetail/CommentSection';
import RelatedPosts from '../components/blog/BlogDetail/RelatedPosts';
import { BLOG_POSTS } from '../components/utils/blog';

const comments = [
  {
    id: '1',
    author: "John Doe",
    content: "Great insights! The section about knowing your numbers really resonated with me.",
    date: "March 11, 2024"
  },
  {
    id: '2',
    author: "Emily Chen",
    content: "Would love to see more examples of successful pitches. Any chance of a follow-up article?",
    date: "March 12, 2024"
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUrl = window.location.href;

  const post = BLOG_POSTS.find(post => post.id === id);
  
  if (!post) {
    navigate('/blog');
    return null;
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== id && p.category === post.category)
    .slice(0, 2)
    .map(p => ({
      id: p.id,
      title: p.title,
      image: p.image,
      date: p.date
    }));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <BlogHero
        title={post.title}
        author={post.author}
        date={post.date}
        category={post.category}
        image={post.image}
      />
      
      <ShareButtons url={currentUrl} title={post.title} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <CommentSection comments={comments} />
          </div>
          
          <aside className="space-y-8">
            <RelatedPosts posts={relatedPosts} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;