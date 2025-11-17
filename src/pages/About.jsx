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
              <b>Einfach</b> is an independent design studio based in Boulder Colorado. Established in 2025 by Marvin Melzer I design consumer products that are useful and human-centered. With a background in engineering and hands-on prototyping, I bring concepts to production-ready reality. I am drawn to multigenerational and meaningful products steering away from short lasting trends and profit driven motives.
            </p>
            <p style={{ marginBottom: '16px' }}>
              I focus deeply on one meaningful project at a time from concept to finished object. Einfachs core value is to reduce. less is more
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
