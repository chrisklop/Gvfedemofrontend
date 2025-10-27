import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, User, Briefcase, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from '@formspree/react';

export default function EarlyAccess() {
  const [state, handleSubmit] = useForm("chris@genuverity.com");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await handleSubmit(e);
    
    if (!result || result.succeeded !== false) {
      toast.success('Thanks for your interest! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', organization: '', useCase: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-2xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="mb-4">Sign Up for Early Access</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Be among the first to experience AI-powered fact-checking with GenuVerity
          </p>
        </div>

        <div className="border border-border rounded-sm p-6 md:p-8 mb-6 md:mb-8">
          <h3 className="mb-6">What You'll Get</h3>
          <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <span>Priority access to GenuVerity platform</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <span>Free usage of the platform in exchange for feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <span>Direct input on feature development</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <span>Special early adopter pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <span>API access for developers</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 border border-border rounded-sm p-6 md:p-8">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Organization (Optional)
            </Label>
            <Input
              id="organization"
              name="organization"
              type="text"
              placeholder="Your company or institution"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="useCase">
              How do you plan to use GenuVerity? (Optional)
            </Label>
            <Textarea
              id="useCase"
              name="useCase"
              placeholder="e.g., Researching medical claims, verifying news articles, educational purposes..."
              rows={4}
              value={formData.useCase}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
            {state.submitting ? 'Submitting...' : 'Request Early Access'}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By signing up, you agree to receive occasional updates about GenuVerity. 
            We respect your privacy and will never share your information.
          </p>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Have questions? <Link to="/contact" className="text-primary hover:underline inline-flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
