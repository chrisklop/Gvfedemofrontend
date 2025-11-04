import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Paperclip, Image as ImageIcon, X, FileText } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AnalysisProgress } from '../components/AnalysisProgress';
import { toast } from 'sonner';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [dots, setDots] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Animate the dots in the placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.';
        if (prev === '..') return '...';
        if (prev === '.') return '..';
        return '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        toast.error('Please upload an image file (JPG, PNG, GIF, or WebP)');
        return;
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      
      setAttachedFile(file);
      setIsPopoverOpen(false);
      toast.success('Image attached successfully');
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSearch = () => {
    // If empty and no file, use a default demo claim
    if (!searchQuery.trim() && !attachedFile) {
      setSearchQuery('Vaccines cause autism');
    }
    
    // Show the analysis progress screen
    setIsAnalyzing(true);
    
    // This is a frontend demo - just show progress then navigate to mock results
  };

  const handleAnalysisComplete = (resultId: string) => {
    // Map the query to a mock result ID
    const query = searchQuery.trim().toLowerCase();
    let mockId = 'vaccines-autism-2024'; // Default
    
    // Simple routing based on query content
    if (query.includes('great wall') || query.includes('china') && query.includes('space')) {
      mockId = 'great-wall-space-2024';
    } else if (query.includes('coffee')) {
      mockId = 'coffee-health-2024';
    }
    
    navigate(`/verify/${mockId}`, { state: { query: searchQuery || 'Vaccines cause autism' } });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    // On mobile, scroll the search input into view with offset to account for nav bar
    if (window.innerWidth < 768 && searchInputRef.current) {
      setTimeout(() => {
        const navHeight = 80; // Account for navigation bar height
        const inputRect = searchInputRef.current?.getBoundingClientRect();
        if (inputRect) {
          const scrollToPosition = window.scrollY + inputRect.top - (window.innerHeight / 2) + navHeight;
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Header Navigation */}
      <Navigation />

      {/* If analyzing, show progress screen */}
      {isAnalyzing ? (
        <>
          <AnalysisProgress
            claim={searchQuery}
            onComplete={handleAnalysisComplete}
          />
          <Footer />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-16">
          <div className="w-full max-w-3xl text-center relative animate-fade-in-up">
            {/* Logo as Background - positioned behind search */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 md:-translate-y-16 w-full max-w-[350px] md:max-w-[500px] opacity-90 z-0 pointer-events-none">
              <img
                src="/genuverity-logo.png"
                alt="GenuVerity"
                className="w-full h-auto"
              />
            </div>

            {/* Glass Morphism Search Card - positioned in front */}
            <div className="relative z-10 glass-card-strong rounded-[32px] p-8 md:p-12 mb-8 transition-smooth hover:shadow-[0_16px_64px_rgba(0,0,0,0.08)] mt-16 md:mt-20">
              {/* Search Section */}
              <div className="space-y-8 md:space-y-10">
              <div className="relative">
                {/* Floating Attachment Icon */}
                <div className="absolute inset-y-0 left-5 flex items-center z-10">
                  <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-primary/10 hover:border-primary/30 transition-smooth-fast hover:scale-110 animate-soft-pulse"
                        aria-label="Attach file"
                      >
                        <Paperclip className="h-4 w-4 md:h-5 md:w-5 text-primary cursor-pointer" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-56 p-3" 
                      align="start"
                      side="bottom"
                      sideOffset={8}
                    >
                      <div className="space-y-2">
                        <p className="text-sm mb-3" style={{ fontWeight: 600 }}>Attach Evidence</p>
                        <button
                          onClick={() => {
                            fileInputRef.current?.click();
                          }}
                          className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors text-left"
                        >
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm">Upload Image</p>
                            <p className="text-xs text-muted-foreground">JPG, PNG, GIF, WebP</p>
                          </div>
                        </button>
                        <div className="pt-2 border-t border-border">
                          <p className="text-xs text-muted-foreground">
                            You can also paste URLs or type claims directly into the search box.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Search Icon */}
                <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 md:h-6 md:w-6 text-primary/60" />
                </div>

                {/* Futuristic Search Input */}
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder={`Verify claim, paste link, or attach image${dots}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className={`w-full pl-16 md:pl-20 pr-14 md:pr-16 py-5 md:py-6 text-base md:text-lg border-0 bg-white/60 backdrop-blur-sm rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] transition-smooth focus:bg-white/80 focus:shadow-[inset_0_0_20px_rgba(0,102,255,0.08),0_0_0_3px_rgba(0,102,255,0.1)] hover:bg-white/70 ${
                    isSearchFocused && window.innerWidth < 768
                      ? 'transform scale-[1.02]'
                      : ''
                  }`}
                  style={{ outline: 'none' }}
                />
              </div>

              {/* Attached File Display */}
              {attachedFile && (
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full animate-fade-in-up">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm max-w-[200px] truncate font-medium text-foreground">
                      {attachedFile.name}
                    </span>
                    <button
                      onClick={handleRemoveFile}
                      className="p-1 hover:bg-destructive/10 rounded-full transition-smooth-fast"
                      aria-label="Remove attachment"
                    >
                      <X className="h-3 w-3 text-destructive" />
                    </button>
                  </div>
                </div>
              )}

              {/* Gradient Button with Glow */}
              <div className="flex justify-center">
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="find-truth-btn px-10 md:px-16 py-4 md:py-5 text-lg md:text-xl rounded-full transition-smooth hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,102,255,0.25)] hover:shadow-[0_12px_48px_rgba(0,102,255,0.4)] border-0"
                  style={{
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
                    backgroundSize: '200% 200%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = '100% 50%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = '0% 50%';
                  }}
                >
                  <span className="animated-text">
                    {"Find the Truth".split("").map((char, index) => (
                      <span key={index} className="letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </Button>
              </div>
              </div>

              {/* Tagline */}
              <div className="pt-6 text-sm md:text-base text-muted-foreground/80 font-medium">
                <p>Trusted sources • Verified claims • Deeper insights</p>
              </div>
            </div>

            {/* Demo Mode Notice with Glass Effect */}
            <div className="mt-8 md:mt-10 mx-auto max-w-2xl">
              <div className="glass-card rounded-3xl p-6 md:p-8 border-2 border-primary/10 transition-smooth hover:border-primary/20 hover:shadow-[0_12px_48px_rgba(0,102,255,0.12)]">
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                  GenuVerity is still in development. Any search will show sample fact-checking results, demonstrating GenuVerity's dashboard before launch. Remember: Always verify AI-generated verdicts by reviewing the provided sources.
                </p>
                <p className="text-sm md:text-base text-foreground mt-4">
                  <Link
                    to="/early-access"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-smooth hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,102,255,0.3)]"
                  >
                    Join the Beta
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Sticky Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
