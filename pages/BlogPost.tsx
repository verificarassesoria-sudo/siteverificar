
import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG, BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Usar useMemo para buscar o post de forma síncrona e eficiente
  const post = useMemo(() => BLOG_POSTS.find(p => p.slug === slug), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEO 
        title={`${post.title} | VerifiCar Assessoria`} 
        description={post.excerpt}
      />

      {/* Article Header */}
      <header className="bg-gray-50 pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-gold font-bold mb-8 hover:-translate-x-1 transition-transform">
            <ArrowLeft size={18} className="mr-2" /> Voltar ao Blog
          </Link>
          
          <div className="space-y-6">
            <span className="bg-gold text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter uppercase">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gold" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <span>5 min de leitura</span>
              </div>
              <button 
                onClick={shareContent}
                className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors"
              >
                <Share2 size={18} className="text-gold" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Contextual */}
      <div className="container mx-auto px-4 max-w-4xl -mt-10">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
        />
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl mt-12 bg-white">
        <div className="prose prose-lg prose-gold max-w-none space-y-8 text-gray-700 leading-relaxed font-medium">
          {post.content}

          {/* Call to Action Box */}
          <div className="bg-black text-white p-10 rounded-3xl mt-16 text-center space-y-6 border-b-8 border-gold">
            <h3 className="text-3xl font-black text-gold">Dúvidas sobre sua CNH?</h3>
            <p className="text-gray-400">
              A <strong>VerifiCar Assessoria</strong> oferece suporte técnico para condutores em todo o Brasil. Não arrisque sua liberdade de dirigir.
            </p>
            <a 
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Falar com Especialista Agora
            </a>
          </div>
        </div>
      </article>

      {/* Recommended Section */}
      <section className="container mx-auto px-4 max-w-3xl mt-20">
        <h4 className="text-black font-bold uppercase tracking-widest text-sm mb-8">Outros Artigos</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
             <Link key={p.slug} to={`/blog/${p.slug}`} className="p-6 border border-gray-100 rounded-2xl hover:border-gold transition-colors block group">
                <h5 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{p.title}</h5>
                <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
