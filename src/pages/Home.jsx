import { useState, useRef } from 'react'
import '../App.css'

function ImageFrame({ src, onChange, placeholder }) {
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
        aspectRatio: '4 / 3',
        minHeight: 120,
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      {src ? (
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
      ) : (
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
      )}
    </label>
  )
}

export default function Home() {
  const [images, setImages] = useState([null, null, null, null])

  const handleFile = (index) => (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImages((prev) => {
      const next = [...prev]
      next[index] = url
      return next
    })
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'calc(100% - 40px)', // small horizontal margin
          height: 'calc(100vh - 40px)', // small vertical margin
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 16,
        }}
      >
        {images.map((src, i) => (
          <ImageFrame
            key={i}
            src={src}
            onChange={handleFile(i)}
            placeholder={`Click to add image ${i + 1}`}
          />
        ))}
      </div>
    </main>
  )
}
