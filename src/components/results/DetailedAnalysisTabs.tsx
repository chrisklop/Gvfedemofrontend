import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Source } from '../../types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';

interface DetailedAnalysisTabsProps {
  fullAnalysis?: string;
  sources: Source[];
  relatedClaims?: string[];
}

export function DetailedAnalysisTabs({ fullAnalysis, sources, relatedClaims }: DetailedAnalysisTabsProps) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
      <Tabs defaultValue="analysis" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-muted/50">
          <TabsTrigger value="analysis">Full AI Analysis</TabsTrigger>
          <TabsTrigger value="sources">Source List</TabsTrigger>
          {relatedClaims && relatedClaims.length > 0 && (
            <TabsTrigger value="related">Related Claims</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="analysis" className="p-6 m-0">
          <h3 className="mb-4">Detailed Analysis</h3>
          {fullAnalysis ? (
            <div className="prose prose-sm max-w-none">
              {fullAnalysis.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No detailed analysis available.</p>
          )}
        </TabsContent>

        <TabsContent value="sources" className="p-6 m-0">
          <h3 className="mb-4">All Sources ({sources.length})</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Credibility</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sources.map((source) => (
                  <TableRow key={source.id}>
                    <TableCell className="max-w-md">
                      <div>
                        <div className="line-clamp-2">{source.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {source.domain}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {source.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{source.credibilityScore}%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {source.publishDate || 'N/A'}
                    </TableCell>
                    <TableCell>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {relatedClaims && relatedClaims.length > 0 && (
          <TabsContent value="related" className="p-6 m-0">
            <h3 className="mb-4">Related Claims</h3>
            <p className="text-sm text-muted-foreground mb-4">
              People who searched this also checked:
            </p>
            <div className="space-y-2">
              {relatedClaims.map((claim, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <span className="text-sm">{claim}</span>
                </a>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
