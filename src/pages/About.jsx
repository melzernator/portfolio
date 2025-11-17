export default function About() {
  return (
    <main style={{ width: '100%', margin: 0, padding: '120px 0px 60px', boxSizing: 'border-box' }}>
      <article style={{
        lineHeight: 1.8,
        fontSize: '1rem',
        color: '#333',
        paddingLeft: '4px',
        paddingRight: '4px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.0,
            letterSpacing: '0.01em',
            display: 'inline-block',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center'
          }}>
            Einfach
          </h1>

          <div style={{ textAlign: 'justify', flex: 1 }}>
            <p style={{ marginBottom: '16px' }}>
              <strong>Einfach</strong> is an independent design studio in Boulder, Colorado, founded in 2025 by Marvin Melzer. I design consumer products with a focus on simplicity and purpose, stripping away the unnecessary to reveal what truly matters. Every project is guided by rigorous attention to detail and the principle that less is more.
            </p>
<p style={{ marginBottom: '16px' }}>
              {/* intentional empty line for spacing */}
            </p>
            <p style={{ marginBottom: '16px' }}>
              My engineering foundation and hands-on prototyping practice translate ideas into production-ready realities. I focus deeply on one meaningful project at a time, prioritizing multigenerational, human-centered design over short-lived trends.
            </p>

            
          </div>
        </div>
      </article>
    </main>
  )
}
