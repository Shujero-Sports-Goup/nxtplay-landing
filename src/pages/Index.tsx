
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AudienceSection from '@/components/AudienceSection';
import WaitlistForm from '@/components/WaitlistForm';
import BusinessForm from '@/components/BusinessForm';
import LeagueForm from '@/components/LeagueForm';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeForm, setActiveForm] = useState('waitlist');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <AboutSection />

      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg text-muted-foreground">
              NextPlay creates opportunities across the entire sports ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-nextplay-blue/10 to-nextplay-green/10 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-nextplay-blue">For Fans</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-nextplay-green font-bold mr-2">•</span>
                  <span>Real-time stats for your favorite teams and players</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-green font-bold mr-2">•</span>
                  <span>Follow entire leagues or just specific matchups</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-green font-bold mr-2">•</span>
                  <span>Get notified of key moments during games</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-green font-bold mr-2">•</span>
                  <span>Engage with a community of other fans</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-nextplay-orange/10 to-nextplay-blue/10 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-nextplay-blue">For Businesses</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-nextplay-orange font-bold mr-2">•</span>
                  <span>Target ads during peak engagement moments</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-orange font-bold mr-2">•</span>
                  <span>Connect with sports fans when they're most engaged</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-orange font-bold mr-2">•</span>
                  <span>Affordable advertising for businesses of all sizes</span>
                </li>
                <li className="flex">
                  <span className="text-nextplay-orange font-bold mr-2">•</span>
                  <span>Data-driven insights on ad performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <AudienceSection />

      <section id="waitlist" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join NextPlay Today</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a fan, business, or league organizer, there's a place for you in the NextPlay ecosystem.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Tabs defaultValue="waitlist" value={activeForm} onValueChange={setActiveForm} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="waitlist">Fans</TabsTrigger>
                <TabsTrigger value="business">Businesses</TabsTrigger>
                <TabsTrigger value="league">Leagues</TabsTrigger>
              </TabsList>
              <TabsContent value="waitlist">
                <WaitlistForm />
              </TabsContent>
              <TabsContent value="business" id="partner">
                <BusinessForm />
              </TabsContent>
              <TabsContent value="league">
                <LeagueForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
