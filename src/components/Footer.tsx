import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Links with modern styling */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Privacy
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block opacity-30" />
              <Link
                to="/limitations"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Limitations
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block opacity-30" />
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Separator orientation="vertical" className="h-4 hidden sm:block opacity-30" />
              <Link
                to="/api-docs"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                API
              </Link>
              <Separator orientation="vertical" className="h-4 hidden sm:block opacity-30" />
              <Link
                to="/early-access"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Beta
              </Link>
            </div>
          </div>

          {/* Copyright with subtle styling */}
          <div className="text-xs text-muted-foreground/70 text-center font-medium">
            © {new Date().getFullYear()} GenuVerity. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
