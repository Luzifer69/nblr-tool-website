/**
 * Pricing Page
 * Preispläne mit Platzhaltern und FAQ
 */

import { Link } from 'react-router-dom';
import { PricingCard, Button, Accordion, AccordionItem, HintBox } from '../components/ui';
import { PRICING } from '../data/siteContent';

export function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {PRICING.sectionTitle}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {PRICING.sectionSubtitle}
          </p>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HintBox type="info">
            {PRICING.disclaimer}
          </HintBox>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {PRICING.plans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={plan.price}
                priceNote={plan.priceNote}
                description={plan.description}
                features={plan.features}
                limitations={plan.limitations}
                cta={plan.cta}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Budget Hint */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              💰 Was kostet Werbung auf Meta?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Zusätzlich zum NBLR Tool Abo zahlst du dein Werbebudget direkt an Meta 
              (Facebook/Instagram). Du bestimmst selbst, wie viel du ausgeben möchtest.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Minimum</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">5€ / Tag</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">~150€ / Monat</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-500/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-500/30">
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">Empfohlen</p>
                <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">10-20€ / Tag</p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">~300-600€ / Monat</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Profi</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">20€+ / Tag</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">~600€+ / Monat</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 text-center">
              [PLATZHALTER] Diese Empfehlungen werden basierend auf Beta-Erfahrungen angepasst.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing FAQ */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Häufige Fragen zu Preisen
          </h2>
          
          <Accordion>
            {PRICING.faq.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p className="text-slate-600 dark:text-slate-300">{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            NBLR Tool vs. Alternative
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white"></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      NBLR Tool
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
                      Marketing-Agentur
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
                      Selbst machen
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Monatliche Kosten</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">29-59€</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">500-2000€</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">0€</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Setup-Zeit</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">5 Minuten</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">1-2 Wochen</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">Stunden-Tage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Vorkenntnisse nötig</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">Keine</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">Keine</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">Viele</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Lokales Targeting</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">✓ Optimiert</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">Kompliziert</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Kontrolle behalten</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">✓ Volle</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">Limitiert</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">✓ Volle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">
            [PLATZHALTER] Werte sind Schätzungen und werden regelmäßig aktualisiert.
          </p>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 gradient-bg-animated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Starte kostenlos als Beta-Tester
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Beta-Nutzer erhalten [PLATZHALTER] Monate kostenlosen Zugang.
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
