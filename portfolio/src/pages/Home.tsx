import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="home">
      <div className="home__bg" aria-hidden />
      <header className="home__header">
        <h1 className="home__title">Marvin’s Portfolio</h1>
        <p className="home__subtitle">design and fabrication</p>
      </header>
      <Nav variant="dark" />
    </div>
  );
}
