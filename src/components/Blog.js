import React from 'react';
import { Link } from 'react-router-dom';
import './ContentStyles.css'; // Ortak stil dosyası

const blogPosts = [
  {
    id: 1,
    title: 'Web Geliştirme Temelleri',
    description: 'Modern web teknolojileri üzerine kapsamlı rehber',
    date: '15 Ekim 2023',
    image: 'https://www.nemutlu.net/images/blog-olusturma-nedira676a3e8-1632-477c-993b-93cb1af29de8.jpg'
  },
  {
    id: 2,
    title: 'React ile Modern Uygulamalar',
    description: 'İleri düzey React teknikleri ve best practices',
    date: '20 Kasım 2023',
    image: 'https://www.nemutlu.net/images/blog-olusturma-nedira676a3e8-1632-477c-993b-93cb1af29de8.jpg'
  }
];

const Blog = () => {
  return (
    <section className="content-section">
      <div className="page-header">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Teknoloji ve Tasarım Üzerine Yazılar</p>
      </div>

      <div className="card-container">
        {blogPosts.map((post) => (
          <article className="content-card" key={post.id}>
            <img 
              src={post.image} 
              alt={post.title} 
              className="card-image"
              loading="lazy"
            />
            <div className="card-content">
              <h2>{post.title}</h2>
              <div className="meta-info">
                <span className="date">{post.date}</span>
              </div>
              <p className="description">{post.description}</p>
              <Link to={`/blog/${post.id}`} className="card-button">
                Devamını Oku
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;