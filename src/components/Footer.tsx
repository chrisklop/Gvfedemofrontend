import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Links - mobile: 2 rows, desktop: single row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <Link 
                to="/limitations" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Limitations
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <Link 
                to="/api-docs" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                API
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <Link 
                to="/early-access" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Beta
              </Link>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} GenuVerity. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
