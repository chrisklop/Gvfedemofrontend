import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Paperclip } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { AnalysisProgress } from '../components/AnalysisProgress';
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    // If empty, use a default demo claim
    if (!searchQuery.trim()) {
      setSearchQuery('Vaccines cause autism');
    }
    
    // Show the analysis progress screen
    setIsAnalyzing(true);
    
    // In production, this would trigger the actual API call
    // For now, we simulate the progress and then navigate
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

  // If analyzing, show progress screen
  if (isAnalyzing) {
    return (
      <AnalysisProgress
        claim={searchQuery}
        onComplete={handleAnalysisComplete}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header Navigation */}
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-0">
        <div className="w-full max-w-2xl text-center md:-mt-20">
        {/* Logo Section */}
        <div className="mb-6 md:mb-6">
          <img 
            src={genuverityLogo} 
            alt="GenuVerity - Constitutional AI Fact Checking" 
            className="mx-auto max-w-[240px] md:max-w-md w-full h-auto"
          />
        </div>

        {/* Search Section */}
        <div className="space-y-4 md:space-y-6 md:-mt-[180px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Paperclip className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Enter a claim or statement to verify..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-10 md:pl-12 md:pr-12 py-3 md:py-4 text-base md:text-lg border-2 border-border hover:border-ring focus:border-ring rounded-full shadow-sm bg-input-background"
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={handleSearch}
              size="lg"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full hover:shadow-md transition-shadow text-[#64B8F7]"
            >
              Find the Truth
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
    </div>
  );
}
