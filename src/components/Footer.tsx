
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nextplay-blue text-white">
      <div className="container mx-auto px-4 py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NextPlay</h3>
            <p className="text-white/80">
              The future of sports engagement, powered by real-time data.
            </p>
            <p className="text-white/60 text-sm">
              A Nukta product in collaboration with Woopy Sport.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About NextPlay</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#audience" className="text-white/80 hover:text-white transition-colors">Who It's For</a></li>
              <li><a href="#waitlist" className="text-white/80 hover:text-white transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Call to Action</h3>
            <p className="text-white/80">
              Be part of the alpha wave. NextPlay is launching soon — and the next move is yours.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="#waitlist" className="flex items-center text-white/80 hover:text-white transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Pre-register your League/Tournament
              </a>
              <a href="#business-form" className="flex items-center text-white/80 hover:text-white transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Book an Ad Spot
              </a>
              <a href="#waitlist" className="flex items-center text-white/80 hover:text-white transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Stay in the Loop
              </a>
            </div>
          </div>
        </div> */}
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} NextPlay. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
