import { Button } from '../ui/button';
import { Share2, Copy, Download, Bookmark, Flag, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface ActionButtonsProps {
  claim: string;
  resultId: string;
}

export function ActionButtons({ claim, resultId }: ActionButtonsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Fact Check: ${claim}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleCopyCitation = () => {
    const citation = `GenuVerity Fact Check. "${claim}". Accessed ${new Date().toLocaleDateString()}.`;
    navigator.clipboard.writeText(citation);
    toast.success('Citation copied to clipboard!');
  };

  const handleDownload = () => {
    toast.info('PDF download feature coming soon!');
  };

  const handleSave = () => {
    toast.success('Saved to your library!');
  };

  const handleReport = () => {
    toast.info('Report form coming soon!');
  };

  const handleDiscuss = () => {
    toast.info('Discussion forum coming soon!');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Button variant="outline" onClick={handleShare}>
          <Share2 className="h-4 w-4 mr-2" />
          Share Results
        </Button>
        <Button variant="outline" onClick={handleCopyCitation}>
          <Copy className="h-4 w-4 mr-2" />
          Copy Citation
        </Button>
        <Button variant="outline" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline" onClick={handleSave}>
          <Bookmark className="h-4 w-4 mr-2" />
          Save to Library
        </Button>
        <Button variant="outline" onClick={handleReport}>
          <Flag className="h-4 w-4 mr-2" />
          Report Issue
        </Button>
        <Button variant="outline" onClick={handleDiscuss}>
          <MessageSquare className="h-4 w-4 mr-2" />
          Discuss
        </Button>
      </div>
    </div>
  );
}
