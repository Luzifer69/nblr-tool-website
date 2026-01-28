/**
 * Cookie Banner Komponente
 * Für lokale Compliance, speichert Einstellungen im localStorage
 */

import { useState, useEffect } from 'react';
import { Button } from './Button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    // Prüfe ob bereits eine Cookie-Einstellung existiert
    const existingPrefs = localStorage.getItem('cookie-preferences');
    if (!existingPrefs) {
      // Kurze Verzögerung damit die Seite erst lädt
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const savePreferences = (preferences: Partial<CookiePreferences>) => {
    const prefs: CookiePreferences = {
      necessary: true, // Immer erforderlich
      analytics: preferences.analytics ?? false,
      marketing: preferences.marketing ?? false,
      timestamp: Date.now(),
    };
    
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setShowBanner(false);
    setShowDetails(false);
  };
  
  const acceptAll = () => {
    savePreferences({ analytics: true, marketing: true });
  };
  
  const acceptNecessary = () => {
    savePreferences({ analytics: false, marketing: false });
  };
  
  const acceptSelected = () => {
    // Hier könnten individuelle Einstellungen gelesen werden
    // Für Einfachheit: nur notwendige Cookies
    savePreferences({ analytics: false, marketing: false });
  };
  
  if (!showBanner) return null;
  
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-2xl z-[101]">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showDetails ? (
            // Kompakte Ansicht
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  🍪 Diese Website verwendet Cookies
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Wir verwenden Cookies, um deine Erfahrung zu verbessern und um zu verstehen, 
                  wie unsere Website genutzt wird. Notwendige Cookies sind für die grundlegende 
                  Funktionalität erforderlich.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:ml-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="text-xs"
                >
                  Einstellungen
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="text-xs"
                >
                  Nur notwendige
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={acceptAll}
                  className="text-xs"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          ) : (
            // Detailansicht
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  🍪 Cookie-Einstellungen
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Wähle aus, welche Cookies du zulassen möchtest. Du kannst diese 
                  Einstellungen jederzeit ändern.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Notwendige Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Notwendige Cookies
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich 
                      (Theme-Auswahl, Formular-Validierung).
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded">
                      Erforderlich
                    </span>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Helfen uns zu verstehen, wie die Website genutzt wird. Alle Daten sind anonymisiert.
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      [Derzeit nicht aktiv]
                    </span>
                  </div>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Werden verwendet, um relevante Inhalte und Werbung anzuzeigen.
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      [Derzeit nicht aktiv]
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-slate-600">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="text-xs"
                >
                  Zurück
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="text-xs"
                >
                  Nur notwendige
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={acceptSelected}
                  className="text-xs"
                >
                  Auswahl speichern
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={acceptAll}
                  className="text-xs"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}