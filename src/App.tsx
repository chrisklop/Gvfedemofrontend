import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './pages/Home';
import Results from './pages/Results';
import HowItWorks from './pages/HowItWorks';
import Mission from './pages/Mission';
import EarlyAccess from './pages/EarlyAccess';
import ApiDocs from './pages/ApiDocs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import KnownLimitations from './pages/KnownLimitations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify/:id" element={<Results />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/limitations" element={<KnownLimitations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </HashRouter>
    </ThemeProvider>
  );
}
