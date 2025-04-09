
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeagueForm = () => {
  const [formData, setFormData] = useState({
    leagueName: '',
    contactName: '',
    email: '',
    phone: '',
    sportType: '',
    leagueSize: '',
    startDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Registration successful!",
        description: "We'll contact you about setting up your league soon.",
      });
    }, 1500);
  };

  return (
    <div id="league-form" className="bg-white rounded-lg border border-border p-8">
      <h3 className="text-2xl font-bold mb-4">Register Your League/Tournament</h3>
      <p className="text-muted-foreground mb-6">
        Ready to transform how fans experience your league? Register below to get started.
      </p>

      {isSubmitted ? (
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nextplay-blue/10 text-nextplay-blue mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Registration Successful!</h4>
          <p className="text-muted-foreground">
            Thanks for registering your league with NextPlay. Our team will reach out shortly to discuss the next steps.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="leagueName">League/Tournament Name</Label>
            <Input
              id="leagueName"
              name="leagueName"
              placeholder="Name of your league or tournament"
              value={formData.leagueName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="contactName">Contact Person</Label>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sportType">Sport</Label>
              <Select onValueChange={(value) => handleSelectChange('sportType', value)} value={formData.sportType}>
                <SelectTrigger id="sportType">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="soccer">Soccer</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="leagueSize">League Size</Label>
              <Select onValueChange={(value) => handleSelectChange('leagueSize', value)} value={formData.leagueSize}>
                <SelectTrigger id="leagueSize">
                  <SelectValue placeholder="Number of teams" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-4">2-4 teams</SelectItem>
                  <SelectItem value="5-8">5-8 teams</SelectItem>
                  <SelectItem value="9-16">9-16 teams</SelectItem>
                  <SelectItem value="17+">17+ teams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="startDate">Expected Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your league or tournament..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nextplay-blue hover:bg-nextplay-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register League'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default LeagueForm;
