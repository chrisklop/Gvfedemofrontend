import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Use form data instead of JSON
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('subject', formData.subject);
      form.append('message', formData.message);
      form.append('_subject', 'GenuVerity Contact Form');

      const response = await fetch('https://formspree.io/f/movpwyby', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        toast.error(`Error: ${errorData.error || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4" style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.2 }}>
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
              Have questions about GenuVerity? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-8 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => handleChange('subject', value)}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="api">API Access</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button type="submit" size="lg" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
                  By submitting this form, you agree to our Privacy Policy. We will only use your information to respond to your inquiry.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting us. We'll get back to you within 24-48 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'general', message: '' });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </Card>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>Email</h3>
              <p className="text-muted-foreground mb-2">For general inquiries:</p>
              <a 
                href="mailto:chris@genuverity.com" 
                className="text-primary hover:underline"
                style={{ fontWeight: 500 }}
              >
                chris@genuverity.com
              </a>
            </Card>

            <Card className="p-6">
              <h3 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond within 24-48 hours during business days.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
