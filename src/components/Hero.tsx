import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LaunchCountdown from './LaunchCountdown';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-nextplay-blue/5 to-nextplay-green/5 -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-nextplay-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-nextplay-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="animate-slideUp [animation-delay:100ms]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-nextplay-blue">Where Sports Meets</span> 
              <span className="text-nextplay-green"> Real-Time Value</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Built for the game, powered by data.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Whether you're a fan, a brand, or a league — NextPlay lets you experience sports like never before.
            </p>
            
            <LaunchCountdown />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center animate-slideUp [animation-delay:300ms]">
            <Button asChild className="bg-nextplay-green hover:bg-nextplay-green/90 text-white font-semibold py-6 px-8 rounded-lg w-full sm:w-auto">
              <a href="#waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-nextplay-blue text-nextplay-blue hover:bg-nextplay-blue/5 font-semibold py-6 px-8 rounded-lg w-full sm:w-auto">
              <a href="#partner">
                Partner with Us
              </a>
            </Button>
          </div>
          
          <div className="w-full max-w-4xl mx-auto mt-16 relative animate-slideUp [animation-delay:500ms]">
            <div className="aspect-video relative bg-gradient-to-br from-nextplay-blue to-nextplay-green rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Transform Live Games Into Valuable Moments</h3>
                    <p className="text-white/90">Real-time sports data visualization coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
