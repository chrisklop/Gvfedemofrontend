import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/how-it-works', label: 'How it Works' },
    { path: '/mission', label: 'Our Mission' },
  ];

  return (
    <header className="sticky top-0 w-full z-[100] pt-4 pb-2 md:pt-6 md:pb-3">
      {/* Floating Pill Container */}
      <nav className="max-w-6xl mx-auto px-4">
        <div className="glass-card-strong rounded-full px-6 py-2.5 md:px-8 md:py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-smooth hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] border border-white/40">
          {/* Logo - proper sizing matching nav height */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex-shrink-0 transition-smooth hover:scale-105"
            style={{
              height: '40px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src="/gvcleanlogo.png"
              alt="GenuVerity"
              className="w-auto"
              style={{
                height: 'auto',
                width: 'auto',
                maxWidth: 'none'
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_4px_16px_rgba(0,102,255,0.25)]'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/60 transition-smooth-fast"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 animate-fade-in-up">
          <div className="glass-card rounded-3xl p-3 shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl text-sm font-medium transition-smooth ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_4px_16px_rgba(0,102,255,0.25)]'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
