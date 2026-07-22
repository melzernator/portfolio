import ambience from '../assets/home/ambience1.mp4';

export default function Home() {
  return (
    <div className="home">
      <video
        className="home__video"
        src={ambience}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <header className="home__header">
        <h1 className="home__title">Marvin’s Portfolio</h1>
        <p className="home__subtitle">design and fabrication</p>
      </header>
    </div>
  );
}
