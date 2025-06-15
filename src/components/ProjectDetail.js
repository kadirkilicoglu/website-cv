import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projects = [
  {
    id: 1,
    title: 'Akıllı E-Ticaret Platformu',
    date: '15 Mart 2024',
    content: `
      <h2>Projenin Amacı</h2>
      <p>Modern tüketici ihtiyaçlarına uygun, yapay zeka destekli kişiselleştirilmiş bir alışveriş deneyimi sunmak.</p>
      
      <h2>Temel Özellikler</h2>
      <ul>
        <li>Gerçek zamanlı ürün öneri sistemi</li>
        <li>3B ürün görüntüleyici</li>
        <li>Sanal deneyim odaları</li>
        <li>Entegre AR desteği</li>
      </ul>

      <h2>Teknik Detaylar</h2>
      <p>Proje mimarisi mikroservis tabanlı olarak tasarlandı. Ana bileşenler:</p>
      <ul>
        <li><strong>Frontend:</strong> React + Three.js</li>
        <li><strong>Backend:</strong> Node.js + GraphQL</li>
        <li><strong>Veritabanı:</strong> MongoDB Atlas</li>
        <li><strong>AI Motoru:</strong> Python + TensorFlow</li>
      </ul>

      <h2>Kazanımlar</h2>
      <ul>
        <li>%40 artan kullanıcı etkileşimi</li>
        <li>%30 düşen işlem terk oranı</li>
        <li>2024 Web Ödülleri'nde "En İnovatif Platform"</li>
      </ul>
    `,
    media: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/6x7BlIJJDLg',
        title: '3B Ürün Demo'
      },
      { 
        type: 'image', 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/800px-Googleplex_HQ_%28cropped%29.jpg',
        alt: 'Ana Sayfa Görünümü'
      }
    ],
    techStack: ['React', 'Three.js', 'Node.js', 'TensorFlow']
  },
  {
    "id": 2,
    "title": "Akıllı Fitness Mobil Uygulaması",
    "date": "28 Şubat 2024",
    "content": `
      <h2>Projenin Amacı</h2>
      <p>Kişiselleştirilmiş fitness deneyimi sunan, AI destekli cross-platform mobil çözüm geliştirmek.</p>
      
      <h2>Temel Özellikler</h2>
      <ul>
        <li>AI destekli antrenman planlayıcı</li>
        <li>Gerçek zamanlı hareket analizi</li>
        <li>Canlı eğitmen desteği</li>
        <li>Beslenme takip sistemi</li>
      </ul>
  
      <h2>Teknik Detaylar</h2>
      <p>Mimari optimizasyon odaklı tasarlandı. Ana bileşenler:</p>
      <ul>
        <li><strong>Frontend:</strong> Flutter + BLoC</li>
        <li><strong>Backend:</strong> Node.js + Firebase</li>
        <li><strong>Analiz Motoru:</strong> Python + OpenCV</li>
        <li><strong>Veritabanı:</strong> Firestore Realtime</li>
      </ul>
  
      <h2>Kazanımlar</h2>
      <ul>
        <li>Google Play Store'da 4.9/5 rating</li>
        <li>100.000+ aktif kullanıcı</li>
        <li>2024 Mobil Ödülleri'nde "En İyi Fitness Uygulaması"</li>
      </ul>
    `,
    "media": [
      {
        "type": "video",
        "url": 'https://www.youtube.com/embed/6x7BlIJJDLg',
        "title": "Hareket Analizi Demo"
      },
      { 
        "type": "image", 
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/800px-Googleplex_HQ_%28cropped%29.jpg",
        "alt": "Antrenman Ekranı Görünümü"
      }
    ],
    "techStack": ["Flutter", "Firebase", "Python", "OpenCV", "BLoC"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  return (
    <div className="project-detail">
      <header className="project-header">
        <h1>{project.title}</h1>
        <div className="meta-info">
          <span className="date">{project.date}</span>
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="media-grid">
        {project.media.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === 'image' ? (
              <img 
                src={item.url} 
                alt={item.alt} 
                className="project-media"
              />
            ) : (
              <iframe
                className="project-media"
                src={item.url}
                title={item.title}
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>

      <div 
        className="project-content"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </div>
  );
};

export default ProjectDetail;