/**
 * Testimonials Page
 * Nutzer-Erfahrungen und Social Proof
 */

import { Link } from 'react-router-dom';
import { TestimonialCard, Button } from '../components/ui';
import { TESTIMONIALS } from '../data/siteContent';

export function TestimonialsPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {TESTIMONIALS.sectionTitle}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {TESTIMONIALS.sectionSubtitle}
          </p>
          
          {/* Placeholder Hinweis */}
          <div className="mt-8 inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm">
            <span>⚠️</span>
            <span>[PLATZHALTER] Diese Testimonials sind Beispiele für die Beta-Phase</span>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {TESTIMONIALS.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-3xl p-8 md:p-12 border border-indigo-100 dark:border-indigo-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Placeholder */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl h-64 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="text-center text-slate-400 dark:text-slate-500">
                  <div className="text-6xl mb-4">🎸</div>
                  <p>[Künstler-Foto Placeholder]</p>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">Success Story</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
                  [PLATZHALTER] Erste Erfolgsgeschichte
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "Als kleine Indie-Band war Marketing für uns immer ein Fremdwort. 
                  Mit NBLR Tool haben wir innerhalb von 2 Wochen 500 neue Follower 
                  in unserer Region gewonnen. Unser nächstes Konzert war ausverkauft – 
                  zum ersten Mal überhaupt!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/25">
                    B
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">[Beta-Band Name]</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Indie-Rock • Berlin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Typische Ergebnisse
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
            [PLATZHALTER] Diese Zahlen werden mit echten Beta-Daten aktualisiert.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-2">👀</div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">10K+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Impressionen / Woche</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-2">👆</div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">3-5%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Click-Through-Rate</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">0.05€</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Kosten pro Klick</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-2">📈</div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">3x</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Reichweiten-Steigerung</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 gradient-bg-animated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Schreib deine eigene Erfolgsgeschichte
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Werde Teil der NBLR Community und erreiche deine lokalen Fans.
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
