import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Workspace from './pages/Workspace';
import Skills from './pages/Skills';
import About from './pages/About';
import Sign from './pages/Sign';
import Fan from './pages/Fan';

const NAV_ROUTES = new Set(['/', '/workspace', '/skills', '/about']);

function getRoute(): string {
  return window.location.pathname || '/';
}

function normalizeRoute(path: string): string {
  if (path === '/creations' || path === '/workspace') return '/';
  if (path === '/sign') return '/workspace/sign';
  if (path === '/fan') return '/workspace/fan';
  if (path.startsWith('/creations/')) return path.replace(/^\/creations/, '/workspace');
  return path;
}

function renderPage(route: string) {
  switch (route) {
    case '/skills':
      return <Skills />;
    case '/about':
      return <About />;
    case '/workspace/sign':
      return <Sign />;
    case '/workspace/fan':
      return <Fan />;
    default:
      return <Workspace />;
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

  const isDetail = route === '/workspace/sign' || route === '/workspace/fan';
  const showNav = !isDetail;
  const activePath = NAV_ROUTES.has(route) ? route : '/';
  const isWorkspace = activePath === '/' || activePath === '/workspace';

  return (
    <>
      <div className="app-shell" ref={shellRef}>
        {renderPage(route)}
      </div>
      {showNav && (
        <Nav variant={isWorkspace ? 'dark' : 'light'} activePath={activePath} />
      )}
    </>
  );
}
