/**
 * Landing Page
 * Hero Section, Problem/Lösung, Stats, CTA
 */

import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import { HERO, PROBLEM_SOLUTION, FEATURES, TESTIMONIALS, COMPANY } from '../data/siteContent';

export function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline */}
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              {COMPANY.tagline}
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {HERO.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{HERO.headline.split(' ').slice(-1)}</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              {HERO.subheadline}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  {HERO.primaryCTA}
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg">
                  {HERO.secondaryCTA}
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {HERO.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl h-64 md:h-[400px] flex items-center justify-center shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-center text-slate-400 dark:text-slate-500">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg">[App Screenshot / Demo Placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {PROBLEM_SOLUTION.problemTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Marketing für Musiker ist kompliziert und teuer – das muss nicht sein.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEM_SOLUTION.problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-red-100 dark:border-red-900/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{problem.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {PROBLEM_SOLUTION.solutionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {COMPANY.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEM_SOLUTION.solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 p-6 rounded-2xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-100 dark:border-indigo-500/20"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{solution.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {FEATURES.sectionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {FEATURES.sectionSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.mainFeatures.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-black/30"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.slice(0, 2).map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" size="lg">
                Alle Features ansehen →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Proof / Testimonials Preview */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {TESTIMONIALS.sectionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {TESTIMONIALS.sectionSubtitle}
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {TESTIMONIALS.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Featured Testimonial */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-500/20">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-indigo-500/25">
                {TESTIMONIALS.testimonials[0].name.charAt(0)}
              </div>
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-200 italic mb-4">
                  "{TESTIMONIALS.testimonials[0].quote}"
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">{TESTIMONIALS.testimonials[0].name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {TESTIMONIALS.testimonials[0].role} • {TESTIMONIALS.testimonials[0].location}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="ghost">
                Mehr Erfahrungen lesen →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 gradient-bg-animated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit, deine Reichweite zu erhöhen?
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Werde Beta-Tester und erhalte exklusiven frühen Zugang.
          </p>
          <Link to="/signup">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-slate-100 shadow-xl"
            >
              Jetzt Beta-Zugang sichern
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
