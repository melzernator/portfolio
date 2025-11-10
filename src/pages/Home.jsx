import { useState, useRef } from 'react'
import '../App.css'


function ImageFrame({ src, onChange, placeholder }) {
  if (src) {
    // Show image, but do not allow click to open file picker
    return (
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'block',
          borderRadius: 12,
          overflow: 'hidden',
          background: '#f3f3f3',
          position: 'relative',
          minHeight: 120,
          width: '100%',
          height: '100%',
          cursor: 'default',
        }}
      >
        <img
          src={src}
          alt="frame"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }
  // If no image, allow upload
  return (
    <label
      style={{
        flex: 1,
        minHeight: 0,
        display: 'block',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#f3f3f3',
        cursor: 'pointer',
        position: 'relative',
        minHeight: 120,
        width: '100%',
        height: '100%',
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          padding: 12,
          textAlign: 'center',
        }}
      >
        {placeholder}
      </div>
    </label>
  );
}

export default function Home() {
  // Default images from public folder
  const defaultImages = [
    '/braun_deskfan.png',
    '/breathconductor.png',
    '/fens_render.png',
    '/gaia.png',
  ];
  const [images, setImages] = useState([null, null, null, null]);

  const handleFile = (index) => (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <div
        style={{
          width: '100vw',
          height: 'calc(100vh - 56px)', // fits below navbar, no scroll
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 16,
          boxSizing: 'border-box',
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <ImageFrame
            key={i}
            src={images[i] || defaultImages[i]}
            onChange={handleFile(i)}
            placeholder={`Click to add image ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
