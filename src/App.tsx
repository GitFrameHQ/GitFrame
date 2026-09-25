import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Builder } from './pages/Builder';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'builder'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/builder' || hash === '#builder') {
        return 'builder';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/builder' || hash === '#builder') {
        setCurrentPage('builder');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToBuilder = () => {
    setCurrentPage('builder');
    window.history.pushState(null, '', '#builder');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (currentPage === 'builder') {
    return <Builder onNavigateHome={navigateToHome} />;
  }

  return <Home onNavigateToBuilder={navigateToBuilder} />;
}

export default App;