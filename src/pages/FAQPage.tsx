/**
 * FAQ Page
 * Häufig gestellte Fragen mit Accordion
 */

import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, Button } from '../components/ui';
import { FAQ } from '../data/siteContent';

export function FAQPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {FAQ.sectionTitle}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hier findest du Antworten auf die häufigsten Fragen zu NBLR Tool.
          </p>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {FAQ.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category.name}
              </h2>
              
              <Accordion>
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} title={item.question}>
                    <p className="text-slate-600 dark:text-slate-300">{item.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Noch Fragen?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Keine Sorge! Schreib uns einfach und wir helfen dir weiter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="primary">
                Beta-Zugang sichern
              </Button>
            </Link>
            <a href="mailto:kontakt@nblr-tool.de">
              <Button variant="outline">
                Kontakt aufnehmen
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
