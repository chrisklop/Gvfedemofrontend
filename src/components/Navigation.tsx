import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/how-it-works', label: 'How it Works' },
    { path: '/mission', label: 'Our Mission' },
  ];

  return (
    <header className="sticky top-0 w-full bg-background border-b border-border" style={{ zIndex: 100 }}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6" style={{ height: '64px', overflow: 'visible' }}>
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setMobileMenuOpen(false)} 
          className="flex-shrink-0"
          style={{ 
            height: '144px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '-40px',
            marginBottom: '-40px'
          }}
        >
          <img 
            src={genuverityLogo} 
            alt="GenuVerity" 
            className="w-auto"
            style={{ 
              height: '144px',
              maxWidth: 'none'
            }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition-colors hover:opacity-80"
              style={{
                fontSize: '0.875rem',
                fontWeight: isActive(link.path) ? 600 : 400,
                color: isActive(link.path) ? 'var(--foreground)' : 'var(--muted-foreground)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
            style={{ 
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-2 transition-colors ${
                  isActive(link.path)
                    ? 'bg-muted'
                    : 'hover:bg-muted'
                }`}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  color: isActive(link.path) ? 'var(--foreground)' : 'var(--muted-foreground)',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
