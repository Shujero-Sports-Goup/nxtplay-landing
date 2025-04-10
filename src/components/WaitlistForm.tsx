import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios'; // Import Axios

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      stats: false,
      teams: false,
      notifications: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: keyof typeof formData.interests) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: !prev.interests[interest]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const interestsString = Object.keys(formData.interests)
      .filter(key => formData.interests[key as keyof typeof formData.interests])
      .join(', ');

    try {
      const response = await axios.post('https://allstar.nukta.pro/api/waitlistForm', {
        name: formData.name,
        email: formData.email,
        interests: interestsString
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: response.data.message,
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div id="waitlist" className="bg-white rounded-lg border border-border p-8">
      <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
      <p className="text-muted-foreground mb-6">
        Be among the first to experience NextPlay when we launch.
      </p>

      {isSubmitted ? (
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nextplay-green/10 text-nextplay-green mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold mb-2">You're on the list!</h4>
          <p className="text-muted-foreground">
            Thanks for your interest in NextPlay. We'll keep you updated on our launch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
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
            <p className="text-sm font-medium mb-2">I'm interested in: (optional)</p>
            <div className="space-y-2">
              {[
                { id: 'stats', label: 'Live game statistics' },
                { id: 'teams', label: 'Following specific teams' },
                { id: 'notifications', label: 'Game notifications' }
              ].map(item => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={formData.interests[item.id as keyof typeof formData.interests]}
                    onChange={() => handleCheckboxChange(item.id as keyof typeof formData.interests)}
                    className="h-4 w-4 rounded border-gray-300 text-nextplay-blue focus:ring-nextplay-blue"
                  />
                  <label htmlFor={item.id} className="ml-2 text-sm text-muted-foreground">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nextplay-blue hover:bg-nextplay-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            By joining, you agree to receive updates about NextPlay. We respect your privacy and won't share your information.
          </p>
        </form>
      )}
    </div>
  );
};

export default WaitlistForm;
