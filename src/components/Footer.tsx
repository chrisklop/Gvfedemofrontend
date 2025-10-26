import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GenuVerity. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link 
              to="/limitations" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Known Limitations
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link 
              to="/early-access" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Beta
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link 
              to="/api-docs" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              API
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
