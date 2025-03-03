import React from 'react';
import BlogCard from './BlogCard';
import { mockPosts } from '../../data/mockData';

const LatestPosts = () => {
  // Get posts after the featured ones
  const latestPosts = mockPosts.slice(4, 10);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
          <a 
            href="/category/all" 
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
          >
            View all
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
