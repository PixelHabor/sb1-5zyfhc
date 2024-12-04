import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-[#f9f9f9]">
        {children}
      </main>
      <Footer />
    </div>
  );
}