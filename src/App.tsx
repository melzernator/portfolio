import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Creations from './pages/Creations';
import Skills from './pages/Skills';
import About from './pages/About';
import Sign from './pages/Sign';
import Fan from './pages/Fan';

const NAV_ROUTES = new Set(['/', '/creations', '/skills', '/about']);

function getRoute(): string {
  return window.location.hash.replace(/^#/, '') || '/';
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

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const showNav = NAV_ROUTES.has(route) || !route.startsWith('/creations/');
  const activePath = NAV_ROUTES.has(route) ? route : '/';
  const isHome = activePath === '/';

  return (
    <>
      {renderPage(route)}
      {showNav && <Nav variant={isHome ? 'dark' : 'light'} activePath={activePath} />}
    </>
  );
}
