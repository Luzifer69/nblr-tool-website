/**
 * Impressum & Nutzungsbedingungen Page
 * Rechtliche Informationen
 */

import { Link } from 'react-router-dom';

export function ImpressumPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Impressum & Nutzungsbedingungen
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Rechtliche Informationen zu NBLR Tool
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-sm max-w-none">
          
          {/* Impressum Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Impressum
            </h2>
            
            <div className="space-y-8 text-slate-600 dark:text-slate-300">
              
              {/* Angaben gemäß § 5 TMG */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Angaben gemäß § 5 TMG
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Name:</p>
                    <p>Niklas Behrens</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Anschrift:</p>
                    <p>Alte Weide 29</p>
                    <p>26655 Westerstede</p>
                    <p>Deutschland</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Kontakt:</p>
                    <p>E-Mail: <a href="mailto:niklas@nblr-tools.de" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">niklas@nblr-tools.de</a></p>
                  </div>
                </div>
              </div>

              {/* Verantwortlich für den Inhalt */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h3>
                
                <div className="space-y-2">
                  <p>Niklas Behrens</p>
                  <p>Alte Weide 29</p>
                  <p>26655 Westerstede</p>
                  <p>Deutschland</p>
                </div>
              </div>

              {/* Hinweis */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-indigo-600 dark:border-indigo-400 p-6 rounded">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Hinweis
                </h3>
                <p>
                  Diese Website dient derzeit ausschließlich der Information über ein geplantes Software-Produkt.
                  Ein kommerzieller Betrieb sowie eine Unternehmensgründung bestehen aktuell noch nicht.
                  Die dargestellten Inhalte stellen kein verbindliches Angebot dar.
                </p>
              </div>

            </div>
          </div>

          {/* Nutzungsbedingungen Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Nutzungsbedingungen
            </h2>
            
            <div className="space-y-8 text-slate-600 dark:text-slate-300">
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  1. Geltungsbereich
                </h3>
                <p>
                  Diese Nutzungsbedingungen gelten für die Nutzung dieser Website und ihrer Inhalte.
                  Mit dem Aufruf der Website erklärst du dich mit diesen Bedingungen einverstanden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2. Kein Vertragsverhältnis
                </h3>
                <p>
                  Durch die Nutzung dieser Website kommt kein Vertragsverhältnis zustande.
                  Insbesondere entsteht kein Anspruch auf die Nutzung eines zukünftigen Produkts oder bestimmter Funktionen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  3. Inhalte der Website
                </h3>
                <p>
                  Die Inhalte dieser Website dienen ausschließlich allgemeinen Informationszwecken.
                  Es wird keine Gewähr für Richtigkeit, Vollständigkeit oder Aktualität übernommen.
                  Funktionen, Inhalte und Konzepte können sich jederzeit ändern oder entfallen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4. Haftung
                </h3>
                <p>
                  Die Nutzung der Inhalte erfolgt auf eigene Verantwortung.
                  Eine Haftung für Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der bereitgestellten Informationen entstehen, ist ausgeschlossen,
                  soweit keine vorsätzliche oder grob fahrlässige Pflichtverletzung vorliegt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  5. Urheberrecht
                </h3>
                <p>
                  Alle auf dieser Website veröffentlichten Inhalte (Texte, Konzepte, Bezeichnungen) unterliegen dem Urheberrecht.
                  Eine Verwendung oder Vervielfältigung ohne vorherige Zustimmung ist nicht gestattet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  6. Externe Links
                </h3>
                <p>
                  Sofern diese Website Links zu externen Webseiten Dritter enthält, wird für deren Inhalte keine Haftung übernommen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  7. Änderungen der Nutzungsbedingungen
                </h3>
                <p>
                  Der Betreiber behält sich vor, diese Nutzungsbedingungen jederzeit anzupassen.
                  Es gilt jeweils die zum Zeitpunkt des Besuchs veröffentlichte Version.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  8. Anwendbares Recht
                </h3>
                <p>
                  Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
