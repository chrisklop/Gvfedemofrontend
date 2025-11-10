import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Input } from './ui/input';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/how-it-works', label: 'How it Works' },
    { path: '/mission', label: 'Our Mission' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 w-full bg-background border-b border-border" style={{ zIndex: 100 }}>
      <nav className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex-shrink-0"
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

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter a claim to fact-check..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-border"
            />
          </div>
        </form>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition-colors hover:opacity-80 whitespace-nowrap"
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
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
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
          <div className="flex flex-col p-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter a claim..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
            </form>

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded transition-colors ${
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
