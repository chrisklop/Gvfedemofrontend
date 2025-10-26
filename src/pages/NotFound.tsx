import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="text-center max-w-md">
          <h1 className="mb-4">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <Search className="h-4 w-4 mr-2" />
                Start Fact Checking
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
