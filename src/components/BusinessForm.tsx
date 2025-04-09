
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businessType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request received!",
        description: "We'll contact you about advertising opportunities soon.",
      });
    }, 1500);
  };

  return (
    <div id="business-form" className="bg-white rounded-lg border border-border p-8">
      <h3 className="text-2xl font-bold mb-4">Book an Ad Spot</h3>
      <p className="text-muted-foreground mb-6">
        Interested in advertising with NextPlay? Fill out the form below and we'll contact you with more information.
      </p>

      {isSubmitted ? (
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nextplay-orange/10 text-nextplay-orange mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Request Received!</h4>
          <p className="text-muted-foreground">
            Thanks for your interest in advertising with NextPlay. A member of our team will be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Your company name"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="contactName">Contact Name</Label>
            <Input
              id="contactName"
              name="contactName"
              placeholder="Your name"
              value={formData.contactName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Select onValueChange={handleSelectChange} value={formData.businessType}>
              <SelectTrigger id="businessType">
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="sme">Small/Medium Business</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="agency">Agency</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your advertising needs..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nextplay-orange hover:bg-nextplay-orange/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Information'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default BusinessForm;
