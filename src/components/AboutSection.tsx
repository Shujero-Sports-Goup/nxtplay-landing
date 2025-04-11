
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      title: "Real-Time Stats",
      description: "Capture and share live sports data from any game, creating engagement moments for fans.",
      icon: "📊"
    },
    {
      title: "Smart Advertising",
      description: "Place targeted ads during key moments like timeouts and halftimes when attention is highest.",
      icon: "🎯"
    },
    {
      title: "League Management",
      description: "Streamlined tools for leagues and tournaments to track, monetize, and share game data.",
      icon: "🏆"
    },
    {
      title: "Fan Engagement",
      description: "Give fans the stats they crave with a modern, engaging mobile experience.",
      icon: "📱"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is NextPlay?</h2>
          <p className="text-lg text-muted-foreground">
            NextPlay is a sports data and engagement platform that transforms live games into valuable moments for fans, businesses, and organizers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-muted/50 p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-nextplay-blue to-nextplay-blue rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">From 1v1 matchups to full leagues</h3>
              <p className="mb-6">
                We enable live stats coverage that creates opportunities for leagues, businesses, and fans alike - no expensive equipment needed.
              </p>
              <ul className="space-y-2">
                {[
                  "Startups & SMEs can advertise where attention is highest",
                  "Leagues & Tournaments can monetize and track game data easily",
                  "Fans can follow their teams in real-time, stat-by-stat"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <h4 className="text-xl font-semibold mb-2">Beyond the Score</h4>
                <p>Deep stats tracking brings every moment of the game to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
