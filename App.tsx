
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChatInterface } from './components/ChatInterface';
import { About } from './components/About';
import { Business } from './components/Business';
import { Testimonials } from './components/Testimonials';
import { logVisitor } from './services/discordLogger';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  useEffect(() => {
    logVisitor();
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
            <>
                <Hero setPage={setCurrentPage} />
                <Features />
            </>
        );
      case Page.TEST_AI:
        return <ChatInterface />;
      case Page.ABOUT:
        return <About setPage={setCurrentPage} />;
      case Page.PRODUCT:
        return <Features />;
      case Page.BUSINESS:
        return <Business />;
      case Page.TESTIMONIALS:
        return <Testimonials setPage={setCurrentPage} />;
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      {renderContent()}
    </Layout>
  );
};

export default App;
