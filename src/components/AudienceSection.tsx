
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BarChart, Play } from 'lucide-react';

const AudienceSection = () => {
  const audiences = [
    {
      title: "Businesses",
      icon: <BarChart className="h-8 w-8 text-nextplay-orange" />,
      description: "Place your brand where sports fans are already engaged. Target specific moments during games when attention is at its peak.",
      cta: "Book an Ad Spot",
      link: "#business-form",
      color: "bg-nextplay-orange/10"
    },
    {
      title: "Leagues & Organizers",
      icon: <Users className="h-8 w-8 text-nextplay-blue" />,
      description: "Enhance your tournaments with live stats tracking. Build fan engagement and unlock new revenue streams.",
      cta: "Register Your League",
      link: "#league-form",
      color: "bg-nextplay-blue/10"
    },
    {
      title: "Fans",
      icon: <Play className="h-8 w-8 text-nextplay-green" />,
      description: "Follow your favorite teams with real-time stats, insights, and a whole new way to experience the game.",
      cta: "Join the Waitlist",
      link: "#waitlist",
      color: "bg-nextplay-green/10"
    }
  ];

  return (
    <section id="audience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is It For?</h2>
          <p className="text-lg text-muted-foreground">
            NextPlay creates value for everyone in the sports ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className={`rounded-lg p-8 border border-border ${audience.color}`}>
              <div className="mb-6">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
              <p className="text-muted-foreground mb-6">{audience.description}</p>
              <Button asChild variant="outline" className="w-full">
                <a href={audience.link}>
                  {audience.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                title: "Ads that Work",
                description: "Forget guessing games. We place your brand where fans actually look."
              },
              {
                title: "No Camera? No Problem",
                description: "We focus on live stats, not expensive footage."
              },
              {
                title: "Built for Growth",
                description: "Cover basketball and expand to other sports as you grow."
              },
              {
                title: "Powered by Nukta",
                description: "We're building the future of sports, one stat at a time."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
