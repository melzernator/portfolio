import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Workspace from './pages/Workspace';
import Skills from './pages/Skills';
import About from './pages/About';
import Sign from './pages/Sign';
import Fan from './pages/Fan';
import Atas from './pages/Atas';
import Phone from './pages/Phone';
import Pendant from './pages/Pendant';
import BrickLamp from './pages/BrickLamp';
import Bludolph from './pages/Bludolph';
import NotFound from './pages/NotFound';

const NAV_ROUTES = new Set(['/', '/workspace', '/skills', '/about']);
const KNOWN_ROUTES = new Set([
  '/',
  '/skills',
  '/about',
  '/sign',
  '/fan',
  '/atas',
  '/phone',
  '/pendant',
  '/brick-lamp',
  '/bludolph',
]);

function getRoute(): string {
  return window.location.pathname || '/';
}

function normalizeRoute(path: string): string {
  if (path === '/creations' || path === '/workspace') return '/';
  return path;
}

function renderPage(route: string) {
  switch (route) {
    case '/':
      return <Workspace />;
    case '/skills':
      return <Skills />;
    case '/about':
      return <About />;
    case '/sign':
      return <Sign />;
    case '/fan':
      return <Fan />;
    case '/atas':
      return <Atas />;
    case '/phone':
      return <Phone />;
    case '/pendant':
      return <Pendant />;
    case '/brick-lamp':
      return <BrickLamp />;
    case '/bludolph':
      return <Bludolph />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  const [route, setRoute] = useState(() => normalizeRoute(getRoute()));
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      const next = normalizeRoute(hash);
      window.history.replaceState(null, '', next);
      setRoute(next);
    } else {
      const next = normalizeRoute(getRoute());
      if (next !== window.location.pathname) {
        window.history.replaceState(null, '', next);
      }
      setRoute(next);
    }

    const onPopState = () => {
      const next = normalizeRoute(getRoute());
      setRoute(next);
      shellRef.current?.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const isDetail =
    route === '/sign' ||
    route === '/fan' ||
    route === '/atas' ||
    route === '/phone' ||
    route === '/pendant' ||
    route === '/brick-lamp' ||
    route === '/bludolph';
  const isNotFound = !KNOWN_ROUTES.has(route);
  const showNav = !isDetail && !isNotFound;
  const activePath = NAV_ROUTES.has(route) ? route : '/';
  const isWorkspacePage = route === '/';

  return (
    <>
      {!isWorkspacePage && (
        <div
          className={`site-bg${isNotFound ? ' site-bg--dark' : ''}`}
          aria-hidden="true"
        />
      )}
      <div className="app-shell" ref={shellRef}>
        {renderPage(route)}
      </div>
      {showNav && <Nav variant="light" activePath={activePath} />}
    </>
  );
}
