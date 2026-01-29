/**
 * Features Page
 * Alle Tool-Funktionen mit User-Flow
 */

import { Link } from 'react-router-dom';
import { FeatureCard, Button } from '../components/ui';
import { FEATURES } from '../data/siteContent';

export function FeaturesPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {FEATURES.sectionTitle}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {FEATURES.sectionSubtitle}
          </p>
        </div>
      </section>
      
      {/* User Flow */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {FEATURES.userFlow.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Von Null zur fertigen Kampagne in nur 5 Schritten
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-300 dark:bg-indigo-500/30 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {FEATURES.userFlow.steps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-black/30 h-full">
                    {/* Step Number */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg relative z-10 shadow-lg shadow-indigo-500/25">
                      {step.step}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      {step.description}
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                      ⏱️ {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Total Time */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-full">
              <span className="text-xl">⚡</span>
              <span className="font-semibold">Gesamtzeit: ca. 5 Minuten</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Alle Features im Überblick
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Alles was du brauchst für erfolgreiche lokale Werbung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.mainFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Highlights */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Highlight</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
                Geo-Targeting für lokale Reichweite
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Das Herzstück von NBLR Tool: Erreiche Menschen genau dort, wo deine 
                Konzerte stattfinden. Wähle Städte, Radius und lass das Tool den Rest erledigen.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Flexible Radius-Einstellung</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">5 bis 80 km Radius um jeden Standort</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Mehrere Standorte</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Bewerbe mehrere Konzertorte in einer Kampagne</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Automatische Koordinaten</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Stadt eingeben, wir finden die Koordinaten</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Right: Placeholder Image */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-3xl h-80 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/20">
              <div className="text-center text-slate-400 dark:text-slate-500">
                <div className="text-6xl mb-4">🗺️</div>
                <p>[Geo-Targeting Screenshot]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second Highlight */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Placeholder Image */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 rounded-3xl h-80 flex items-center justify-center border border-purple-200 dark:border-purple-500/20">
              <div className="text-center text-slate-400 dark:text-slate-500">
                <div className="text-6xl mb-4">📊</div>
                <p>[Analytics Dashboard Screenshot]</p>
              </div>
            </div>
            
            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Highlight</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
                Echtzeit-Analytics
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Sieh genau, wie deine Kampagnen performen. Verstehe, welche 
                Bilder funktionieren und welche Standorte die beste Reichweite haben.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Performance-Übersicht</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Impressionen, Klicks, CTR auf einen Blick</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Standort-Analytics</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Welcher Ort performt am besten?</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Bild-Performance</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Welches Creative kommt am besten an?</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 gradient-bg-animated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Probier es selbst aus
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Werde Beta-Tester und erlebe alle Features hautnah.
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
