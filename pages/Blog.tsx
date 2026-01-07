
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Blog Educativo | VerifiCar Assessoria" 
        description="Dicas, notícias e guias práticos sobre legislação de trânsito 2025, multas e regularização de CNH no Brasil."
      />

      {/* Hero */}
      <section className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Blog VerifiCar</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Informação de qualidade e atualizada para você dirigir com consciência e segurança em 2025.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 space-y-4 flex flex-col flex-grow">
                    <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest self-start">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-black text-black group-hover:text-gold transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 text-sm flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      </div>
                      <span className="text-gold font-bold flex items-center gap-2 text-sm">
                        Ler mais <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
