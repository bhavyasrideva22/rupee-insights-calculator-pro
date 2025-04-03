
import React from 'react';
import RDCalculator from '@/components/RDCalculator';
import SEOContent from '@/components/SEOContent';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Rupee Insights: Recurring Deposit Calculator</h1>
          <p className="text-center mt-2 text-secondary max-w-3xl mx-auto">
            Plan your investments wisely with our advanced RD calculator. Get accurate estimates and visualize your growth.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <RDCalculator />
        <SEOContent />
      </main>
      
      <footer className="bg-primary text-white py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Rupee Insights Calculator Pro</p>
              <p className="text-sm text-secondary">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:text-accent transition-colors">Terms of Use</a>
              <a href="#" className="text-white hover:text-accent transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
