import { ReactNode, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent } from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

interface ResultsLayoutProps {
  children: ReactNode;
  sections: { id: string; label: string; available: boolean }[];
}

export function ResultsLayout({ children, sections }: ResultsLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const TableOfContents = () => (
    <nav className="space-y-1">
      <h4 className="mb-4 px-3 text-sm text-muted-foreground">Contents</h4>
      {sections
        .filter(section => section.available)
        .map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left px-3 py-2 rounded-sm hover:bg-muted transition-colors text-sm"
          >
            {section.label}
          </button>
        ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation Bar */}
      <Navigation />
      
      {/* Mobile TOC Button */}
      <div className="lg:hidden">
        <div className="fixed bottom-6 right-6 z-40">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="shadow-lg bg-background"
          >
            <Menu className="h-4 w-4 mr-2" />
            Contents
          </Button>
        </div>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-64">
            <div className="mt-6">
              <TableOfContents />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 flex-1">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <TableOfContents />
              </ScrollArea>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {children}
          </main>

          {/* Right Sidebar (for future use - quick actions, related claims) */}
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="text-sm text-muted-foreground">
                {/* Placeholder for future features */}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
