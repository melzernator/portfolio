import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Creations from './pages/Creations';
import Skills from './pages/Skills';
import About from './pages/About';
import Sign from './pages/Sign';
import Fan from './pages/Fan';

function getRoute(): string {
  return window.location.hash.replace(/^#/, '') || '/';
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
