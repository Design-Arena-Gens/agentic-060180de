'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-void-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(74, 242, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 242, 234, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-glow rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prism-yellow rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
            <span className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse"></span>
            <span className="text-sm text-zinc-400 tracking-wide">AI-POWERED PHOTO INTELLIGENCE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-none">
            Share through
            <br />
            <span className="text-gradient-yellow">Prism</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The intelligent photo-sharing platform that understands your moments. Powered by next-gen AI recognition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-prism-yellow text-void-black rounded-full font-semibold text-lg hover:glow-yellow transition-all duration-300 transform hover:scale-105">
              Download Prism
            </button>
            <button className="px-8 py-4 glass rounded-full font-semibold text-lg border border-white/20 hover:border-cyan-glow/50 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual - Mock Phone Interface */}
          <div className="relative mx-auto max-w-sm">
            <div className="glass rounded-3xl p-1 glow-cyan">
              <div className="bg-deep-surface rounded-[22px] overflow-hidden">
                {/* Phone Notch */}
                <div className="h-8 bg-void-black flex items-center justify-center">
                  <div className="w-32 h-6 bg-deep-surface rounded-full"></div>
                </div>

                {/* App Interface */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">Prism</h3>
                      <p className="text-xs text-zinc-400">Your Intelligent Feed</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center glow-pink">
                      <svg className="w-5 h-5 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Photo Cards */}
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="glass rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-glow to-prism-yellow"></div>
                          <div className="text-left flex-1">
                            <p className="text-sm font-semibold">User {i}</p>
                            <p className="text-xs text-zinc-400">2h ago • Tokyo</p>
                          </div>
                        </div>
                        <div className="w-full h-40 bg-gradient-to-br from-deep-surface via-cyan-glow/10 to-prism-yellow/10 rounded-xl mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-cyan-glow/20 flex items-center justify-center">
                              <svg className="w-6 h-6 text-cyan-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-xs text-zinc-400">AI Processing</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 rounded-full bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20">
                            #sunset
                          </span>
                          <span className="px-2 py-1 rounded-full bg-prism-yellow/10 text-prism-yellow border border-prism-yellow/20">
                            #cityscape
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Intelligence. <span className="text-gradient-yellow">Refined.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Prism doesn't just store photos. It understands them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-cyan-glow/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-cyan-glow/10 flex items-center justify-center mb-6 group-hover:glow-cyan transition-all">
                <svg className="w-7 h-7 text-cyan-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Recognition</h3>
              <p className="text-zinc-400 leading-relaxed">
                AI that identifies objects, scenes, and emotions. Auto-tags your memories instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-neon-pink/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-neon-pink/10 flex items-center justify-center mb-6 group-hover:glow-pink transition-all">
                <svg className="w-7 h-7 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Face ID Privacy</h3>
              <p className="text-zinc-400 leading-relaxed">
                Military-grade encryption. Your photos stay yours. Zero-knowledge architecture.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-prism-yellow/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-prism-yellow/10 flex items-center justify-center mb-6 group-hover:glow-yellow transition-all">
                <svg className="w-7 h-7 text-prism-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Search</h3>
              <p className="text-zinc-400 leading-relaxed">
                Find any photo in milliseconds. Search by people, places, or even vibes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
            <span className="text-sm text-zinc-400 tracking-wide">TRUSTED BY CREATORS WORLDWIDE</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">2M+</div>
              <div className="text-zinc-400">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">500M+</div>
              <div className="text-zinc-400">Photos Analyzed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">99.9%</div>
              <div className="text-zinc-400">Uptime</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="glass rounded-3xl p-12 border border-white/10">
            <p className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
              "Prism transformed how I organize my photography. The AI is <span className="text-prism-yellow font-semibold">scary accurate</span>."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-glow to-neon-pink"></div>
              <div className="text-left">
                <p className="font-semibold">Alex Chen</p>
                <p className="text-sm text-zinc-400">Professional Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to see through
            <br />
            <span className="text-gradient-yellow">Prism?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join millions who've upgraded their photo experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-prism-yellow text-void-black rounded-full font-bold text-lg hover:glow-yellow transition-all duration-300 transform hover:scale-105">
              Download Now
            </button>
            <button className="px-10 py-5 glass rounded-full font-semibold text-lg border border-white/20 hover:border-cyan-glow/50 transition-all duration-300">
              View Pricing
            </button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <span className="text-sm text-zinc-400">Available on:</span>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10">
                <span className="text-xs font-bold">iOS</span>
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10">
                <span className="text-xs font-bold">AND</span>
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10">
                <span className="text-xs font-bold">WEB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Prism</h3>
              <p className="text-sm text-zinc-400">Intelligent photo sharing, refined.</p>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Support</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 hover:border-cyan-glow/50 transition-all">
                <span className="text-xs">TW</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 hover:border-cyan-glow/50 transition-all">
                <span className="text-xs">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 hover:border-cyan-glow/50 transition-all">
                <span className="text-xs">LI</span>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-zinc-400">
            © 2024 Prism Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
