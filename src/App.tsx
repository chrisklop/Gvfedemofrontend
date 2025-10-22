import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './pages/Home';
import Results from './pages/Results';
import HowItWorks from './pages/HowItWorks';
import Mission from './pages/Mission';
import EarlyAccess from './pages/EarlyAccess';
import ApiDocs from './pages/ApiDocs';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify/:id" element={<Results />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}
