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
        <AnalysisProgress
          claim={searchQuery}
          onComplete={handleAnalysisComplete}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-0">
          <div className="w-full max-w-2xl text-center -mt-[150px] md:-mt-20">
            {/* Logo Section */}
            <div className="mb-0 md:mb-6">
              <img 
                src="/genuverity-logo.png" 
                alt="GenuVerity - Constitutional AI Fact Checking" 
                className="mx-auto max-w-[240px] md:max-w-md w-full h-auto"
              />
            </div>

            {/* Search Section */}
            <div className="space-y-[46px] md:space-y-[54px] -mt-16 md:-mt-[180px]">
              <div className="relative">
                {/* Attachment Popover */}
                <div className="absolute inset-y-0 left-4 flex items-center z-10">
                  <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="p-0 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        aria-label="Attach file"
                      >
                        <Paperclip className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground cursor-pointer" />
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
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                </div>

                {/* Search Input */}
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder={`Verify claim, paste link, or attach image${dots}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className={`w-full pl-10 pr-10 md:pl-12 md:pr-12 py-3 md:py-4 text-base md:text-lg border-2 border-border hover:border-ring focus:border-ring rounded-full shadow-sm bg-input-background transition-all duration-200 ${
                    isSearchFocused && window.innerWidth < 768 
                      ? 'transform scale-105 shadow-lg' 
                      : ''
                  }`}
                />
              </div>

              {/* Attached File Display */}
              {attachedFile && (
                <div className="flex items-center justify-center gap-2 -mt-8 mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-full">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm max-w-[200px] truncate">
                      {attachedFile.name}
                    </span>
                    <button
                      onClick={handleRemoveFile}
                      className="p-0.5 hover:bg-background rounded-full transition-colors"
                      aria-label="Remove attachment"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center">
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl rounded-full hover:shadow-md transition-shadow !bg-gray-800 !text-white"
                  style={{ fontWeight: 600 }}
                >
                  <span className="animated-text">
                    <span className="letter letter-1">F</span>
                    <span className="letter letter-2">i</span>
                    <span className="letter letter-3">n</span>
                    <span className="letter letter-4">d</span>
                    <span className="letter letter-5">&nbsp;</span>
                    <span className="letter letter-6">t</span>
                    <span className="letter letter-7">h</span>
                    <span className="letter letter-8">e</span>
                    <span className="letter letter-9">&nbsp;</span>
                    <span className="letter letter-10">T</span>
                    <span className="letter letter-11">r</span>
                    <span className="letter letter-12">u</span>
                    <span className="letter letter-13">t</span>
                    <span className="letter letter-14">h</span>
                  </span>
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 md:pt-8 text-xs md:text-sm text-muted-foreground">
              <p>Trusted sources • Verified claims • Deeper insights</p>
            </div>

            {/* Demo Mode Notice */}
            <div className="mt-6 md:mt-8 mx-auto max-w-2xl">
              <div className="border-2 border-primary/20 rounded-lg p-4 md:p-6 bg-card shadow-lg">
                <p className="text-sm md:text-base text-foreground">
                  GenuVerity is still in development. Any search will show sample fact-checking results, demonstrating GenuVerity's dashboard before launch.
                </p>
                <p className="text-sm md:text-base text-foreground mt-3">
                  <Link 
                    to="/early-access" 
                    className="text-primary underline hover:text-primary/80 transition-colors font-semibold"
                  >
                    Join the Beta
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {!isAnalyzing && <Footer />}
    </div>
  );
}
