export default function About() {
  return (
    <main style={{ width: '100%', margin: 0, padding: '120px 0px 60px', boxSizing: 'border-box' }}>
      <article style={{ lineHeight: 1.8, fontSize: '1rem', color: '#333', paddingLeft: '4px', paddingRight: '4px' }}>
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', lineHeight: 1.4 }}>
            Inventor - Minimalist - Designer
          </h1>
          <p style={{ marginBottom: '16px' }}>
            I design consumer products that are useful and human-centered. With a background in engineering and hands-on prototyping, I bring concepts to production-ready reality. I am drawn to multigenerational and meaningful products steering away from short lasting trends and profit driven motives.
          </p>
          <p style={{ marginBottom: '16px' }}>
            I thrive in clean, ordered studios as they enhance my creative output. There I can focus deeply on one meaningful project at a time from concept to finished object.
          </p>
          <p>
            Studying Creative Technology & Design at CU Boulder, I'm available for industrial design or prototyping roles.
          </p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Core Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: '0.95rem' }}>Generating ideas</p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>hand sketching · 3D modeling</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: '0.95rem' }}>attention to detail</p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>Communicating ideas</p>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: '0.95rem' }}>Making</p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>CNC · 3D Printing · Woodworking · Metalworking · Electronics</p>
            </div>
          </div>
        </section>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '60px' }}>
          <a 
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:c0026edf-043d-40d6-82e1-9a900d4af80c" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#000', textDecoration: 'underline', fontSize: '0.95rem' }}
          >
            CV
          </a>
          <a 
            href="https://www.linkedin.com/in/marvin-melzer/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#000', textDecoration: 'underline', fontSize: '0.95rem' }}
          >
            LinkedIn
          </a>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>working everyday to get better at sketching</p>
        </div>

        <p style={{ fontSize: '0.95rem' }}>
          <a href="mailto:marvin@melzer.org" style={{ color: '#000', textDecoration: 'none' }}>
            marvin@melzer.org
          </a>
        </p>
      </article>
    </main>
  )
}
