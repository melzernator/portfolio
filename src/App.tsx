import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Creations from './pages/Creations';
import Skills from './pages/Skills';
import About from './pages/About';
import Sign from './pages/Sign';
import Fan from './pages/Fan';

const NAV_ROUTES = new Set(['/', '/creations', '/skills', '/about']);

function getRoute(): string {
  return window.location.pathname || '/';
}

function renderPage(route: string) {
  switch (route) {
    case '/creations':
      return <Creations />;
    case '/skills':
      return <Skills />;
    case '/about':
      return <About />;
    case '/creations/sign':
      return <Sign />;
    case '/creations/fan':
      return <Fan />;
    default:
      return <Home />;
  }
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Migrate old hash URLs (#/creations → /creations)
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      window.history.replaceState(null, '', hash);
      setRoute(hash);
    }

    const onPopState = () => {
      setRoute(getRoute());
      shellRef.current?.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const showNav = NAV_ROUTES.has(route) || !route.startsWith('/creations/');
  const activePath = NAV_ROUTES.has(route) ? route : '/';
  const isHome = activePath === '/';

  return (
    <>
      <div className="app-shell" ref={shellRef}>
        {renderPage(route)}
      </div>
      {showNav && <Nav variant={isHome ? 'dark' : 'light'} activePath={activePath} />}
    </>
  );
}
