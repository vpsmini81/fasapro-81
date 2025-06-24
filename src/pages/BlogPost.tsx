import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
          {/* Featured Image */}
          <div className="h-64 md:h-80 relative overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="text-gray-700 mb-4 pl-6 space-y-2">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="list-disc">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-gray-900 font-semibold">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-200 text-blue-600 px-2 py-1 rounded text-sm">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="h-32 relative overflow-hidden">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <div className="flex items-center text-blue-600 text-sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;