export default function About() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 24px 60px' }}>
      <article style={{ lineHeight: 1.6, fontSize: '1rem', color: '#333' }}>
        <h1 style={{ marginBottom: '32px', fontSize: '2.5rem' }}>About</h1>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Hi, I'm Marvin</h2>
          <p>
            I'm a designer and maker focused on creating thoughtful, minimal products that connect people to technology in meaningful ways.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>What I Do</h2>
          <p>
            I work across design thinking, 3D modeling, prototyping, and physical computing. My projects explore the intersection of aesthetics, functionality, and human experience.
          </p>
          <p>
            Whether it's reimagining classic products, building interactive installations, or creating tools that enhance everyday life, I believe good design should be intuitive and beautiful.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Skills</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Product Design & Ideation</li>
            <li>3D CAD & Modeling</li>
            <li>Rendering & Visualization</li>
            <li>Prototyping & 3D Printing</li>
            <li>Electronics & Arduino</li>
            <li>Web Design & Development</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Get in Touch</h2>
          <p>
            Interested in working together? Drop me a line at{' '}
            <a href="mailto:marvin@melzer.org" style={{ color: '#000', textDecoration: 'underline' }}>
              marvin@melzer.org
            </a>
          </p>
        </section>
      </article>
    </main>
  )
}
