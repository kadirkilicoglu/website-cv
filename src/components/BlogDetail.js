import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUser, FaCalendar, FaClock } from 'react-icons/fa';
import './BlogDetail.css';

const blogPosts = [
  {
    id: 1,
    title: 'Web Geliştirmede Modern Trendler',
    date: '15 Ekim 2023',
    readTime: '8 Dakika',
    author: 'Jey Austen',
    category: 'Web Geliştirme',
    content: `
      <h2>2023'ün Öne Çıkan Teknolojileri</h2>
      <p>Web geliştirme dünyası her geçen gün...</p>
      
      <blockquote>
        "Bir framework seçerken topluluk desteği ve dokümantasyon kalitesi en kritik faktörlerdir"
      </blockquote>

      <h3>Popüler Framework'ler</h3>
      <ul>
        <li>React ve Next.js</li>
        <li>Vue 3 Composition API</li>
        <li>SvelteKit</li>
      </ul>

      <img src="https://www.webtasarimi.com/wp-content/uploads/2023/12/web-tasarimi.jpeg" alt="Web Trend Grafiği" />

      <h3>Performans Optimizasyonu</h3>
      <p>Core Web Vitals ölçütlerine uyum sağlamak artık...</p>
    `,
    tags: ['Frontend', 'React', 'SEO']
  },
  {
    id: 2,
    title: 'React 19 ile Yeni Gelen Özellikler',
    date: '20 Kasım 2023',
    readTime: '10 Dakika',
    author: 'Jey Austen',
    category: 'Frontend Development',
    content: `
      <h2>React'in Yeni Sürümündeki Yenilikler</h2>
      <p>React 19, geliştirici deneyimini iyileştiren birçok yeni özellik getiriyor...</p>
      
      <blockquote>
        "Automatic Memoization artık varsayılan davranış haline geldi"
      </blockquote>

      <h3>Başlıca Yenilikler</h3>
      <ul>
        <li>Yeni Server Components API</li>
        <li>Geliştirilmiş Suspense Yönetimi</li>
        <li>Optimize Edilmiş Hydration</li>
        <li>TypeScript 5.0 Desteği</li>
      </ul>

      <img src="https://www.webtasarimi.com/wp-content/uploads/2023/12/web-tasarimi.jpeg" alt="React 19 Özellikleri" />

      <h3>Geçiş Süreci</h3>
      <p>Mevcut projelerinizi yeni sürüme nasıl geçirebileceğinizle ilgili detaylar...</p>
    `,
    tags: ['React', 'JavaScript', 'Frontend']
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  return (
    <article className="blog-detail">
      <header className="blog-header">
        <div className="meta-info">
          <span className="category">{post.category}</span>
          <div className="stats">
            <span><FaUser /> {post.author}</span>
            <span><FaCalendar /> {post.date}</span>
            <span><FaClock /> {post.readTime}</span>
          </div>
        </div>
        
        <h1>{post.title}</h1>
        
        <div className="tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      <section 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogDetail;