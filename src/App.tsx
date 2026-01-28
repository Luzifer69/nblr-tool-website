/**
 * NBLR Tool Website - Main App Component
 * 
 * React Router Setup mit allen Seiten
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Layout } from './components/layout';
import {
  LandingPage,
  FeaturesPage,
  PricingPage,
  TestimonialsPage,
  BetaSignUpPage,
  FAQPage,
} from './pages';
import { CookieBanner } from './components/ui';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/signup" element={<BetaSignUpPage />} />
            <Route path="/faq" element={<FAQPage />} />
            
            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-slate-300 dark:text-slate-700 mb-4">404</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">Seite nicht gefunden</p>
                    <a
                      href="/"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25"
                    >
                      Zurück zur Startseite
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
          <CookieBanner />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
