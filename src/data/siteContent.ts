/**
 * NBLR Tool Website - Zentrale Content-Datei
 * 
 * Alle Texte, Features, Preise und Platzhalter sind hier gesammelt.
 * Zum Anpassen: Einfach die Werte in diesem File ändern.
 * 
 * LEGENDE:
 * [PLATZHALTER] = Muss noch finalisiert werden
 * [BEISPIEL] = Kann als Beispiel so bleiben oder angepasst werden
 */

// ===== ALLGEMEINE INFORMATIONEN =====
export const COMPANY = {
  name: "NBLR Tool",
  tagline: "Meta Ads für Künstler & Bands – einfach gemacht",
  description: "Die All-in-One Lösung für lokales Marketing. Erstelle professionelle Meta Ads Kampagnen in 5 Minuten – ohne Agentur, ohne Vorwissen.",
  email: "kontakt@nblr-tool.de", // [PLATZHALTER]
  website: "https://nblr-tool.de", // [PLATZHALTER]
};

// ===== HERO SECTION =====
export const HERO = {
  headline: "Mehr Reichweite für deine Musik",
  subheadline: "Mit NBLR Tool erreichst du die richtigen Fans in deiner Region – ohne Marketing-Studium.",
  primaryCTA: "Jetzt Beta-Zugang sichern",
  secondaryCTA: "Features ansehen",
  // [BEISPIEL] Stats können später mit echten Zahlen ersetzt werden
  stats: [
    { value: "500+", label: "Beta-Nutzer" },
    { value: "2.000+", label: "Kampagnen erstellt" },
    { value: "5 Min", label: "Setup-Zeit" },
  ],
};

// ===== PROBLEM / LÖSUNG =====
export const PROBLEM_SOLUTION = {
  problemTitle: "Das Problem",
  problems: [
    {
      icon: "💸",
      title: "Agenturen sind zu teuer",
      description: "Marketing-Agenturen verlangen 500-2000€ pro Monat – für kleine Künstler unbezahlbar.",
    },
    {
      icon: "🤯",
      title: "Meta Ads sind kompliziert",
      description: "Kampagnen, Ad Sets, Targeting, Budgets... Der Meta Business Manager überfordert jeden Anfänger.",
    },
    {
      icon: "⏰",
      title: "Keine Zeit fürs Marketing",
      description: "Du willst Musik machen, nicht stundenlang Werbeanzeigen optimieren.",
    },
    {
      icon: "📍",
      title: "Fans sind lokal",
      description: "Deine nächsten Fans wohnen in deiner Stadt – aber wie erreichst du sie gezielt?",
    },
  ],
  solutionTitle: "Die Lösung: NBLR Tool",
  solutions: [
    {
      icon: "✨",
      title: "5-Schritt Workflow",
      description: "Von Null zur fertigen Kampagne in 5 einfachen Schritten. Keine Vorkenntnisse nötig.",
    },
    {
      icon: "🎯",
      title: "Lokales Targeting",
      description: "Erreiche Menschen in einem Radius von 5-80km um deine Konzertorte.",
    },
    {
      icon: "💰",
      title: "Bezahlbare Preise",
      description: "Starte ab 29€/Monat – ein Bruchteil der Agenturkosten.",
    },
    {
      icon: "🚀",
      title: "Automatisierung",
      description: "Das Tool erstellt automatisch optimierte Kampagnen, Ad Sets und Ads.",
    },
  ],
};

// ===== FEATURES =====
export const FEATURES = {
  sectionTitle: "Features",
  sectionSubtitle: "Alles was du brauchst, um deine Musik zu promoten",
  
  mainFeatures: [
    {
      icon: "🎨",
      title: "Einfacher 5-Schritt Workflow",
      description: "Budget festlegen → Standorte wählen → Medien hochladen → Texte schreiben → Starten. Fertig!",
      details: [
        "Geführter Prozess mit Progress-Anzeige",
        "Auto-Save – keine Daten gehen verloren",
        "Vorschau vor dem Start",
      ],
    },
    {
      icon: "📍",
      title: "Präzises Geo-Targeting",
      description: "Zeige deine Werbung nur Menschen in der Nähe deiner Konzertorte.",
      details: [
        "Radius von 5 bis 80 km einstellbar",
        "Mehrere Standorte pro Kampagne",
        "Automatische Koordinaten-Ermittlung",
      ],
    },
    {
      icon: "📊",
      title: "Echtzeit-Analytics",
      description: "Sieh genau, wie deine Kampagnen performen.",
      details: [
        "Impressionen, Klicks, CTR",
        "Performance pro Standort",
        "Performance pro Bild",
      ],
    },
    {
      icon: "🖼️",
      title: "Multi-Media Unterstützung",
      description: "Lade bis zu 5 Bilder hoch – das Tool testet automatisch, welches am besten funktioniert.",
      details: [
        "JPG, PNG, WebP Support",
        "Automatische Optimierung",
        "A/B Testing über mehrere Varianten",
      ],
    },
    {
      icon: "✅",
      title: "Policy-Check",
      description: "Prüfe deine Texte vor dem Start auf Meta-Richtlinien.",
      details: [
        "Zeichenlimit-Validierung",
        "Policy-Compliance Check",
        "Verbesserungsvorschläge",
      ],
    },
    {
      icon: "👀",
      title: "Anzeigen-Vorschau",
      description: "Sieh genau, wie deine Werbung auf Facebook und Instagram aussehen wird.",
      details: [
        "Feed-Vorschau",
        "Story-Vorschau",
        "Desktop & Mobile Ansicht",
      ],
    },
  ],
  
  // Kurzübersicht des User-Flows für die Features-Seite
  userFlow: {
    title: "So funktioniert's",
    steps: [
      {
        step: 1,
        title: "Account erstellen",
        description: "Registriere dich und verbinde deinen Meta Business Account.",
        duration: "2 Min",
      },
      {
        step: 2,
        title: "Budget & Laufzeit",
        description: "Lege fest, wie viel du ausgeben möchtest (ab 5€/Tag).",
        duration: "30 Sek",
      },
      {
        step: 3,
        title: "Standorte wählen",
        description: "Wähle die Städte oder Orte, in denen du werben möchtest.",
        duration: "1 Min",
      },
      {
        step: 4,
        title: "Medien & Texte",
        description: "Lade Bilder hoch und schreibe deine Werbetexte.",
        duration: "2 Min",
      },
      {
        step: 5,
        title: "Starten!",
        description: "Überprüfe die Vorschau und starte deine Kampagne.",
        duration: "30 Sek",
      },
    ],
  },
};

// ===== PRICING =====
// [PLATZHALTER] - Alle Preise sind vorläufig und müssen finalisiert werden
export const PRICING = {
  sectionTitle: "Preise",
  sectionSubtitle: "Transparente Preise, keine versteckten Kosten",
  
  // Hinweis für die Seite
  disclaimer: "* Alle Preise sind Platzhalter und werden vor dem Launch finalisiert. Die angezeigten Werbebudgets gehen direkt an Meta – NBLR Tool behält davon nichts.",
  
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: 29, // [PLATZHALTER] €/Monat
      priceNote: "pro Monat",
      description: "Perfekt zum Ausprobieren",
      features: [
        "1 aktive Kampagne",
        "3 Standorte pro Kampagne",
        "Basis-Analytics",
        "Email-Support",
        "5 Bilder pro Kampagne",
      ],
      limitations: [
        "Keine Prioritäts-Support",
        "Keine Custom-Audiences",
      ],
      cta: "Starter wählen",
      highlighted: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: 59, // [PLATZHALTER] €/Monat
      priceNote: "pro Monat",
      description: "Für aktive Künstler & Bands",
      features: [
        "5 aktive Kampagnen",
        "10 Standorte pro Kampagne",
        "Erweiterte Analytics",
        "Prioritäts-Support",
        "10 Bilder pro Kampagne",
        "A/B Testing",
        "Performance-Berichte",
      ],
      limitations: [],
      cta: "Pro wählen",
      highlighted: true, // Empfohlen
    },
    {
      id: "agency",
      name: "Agency",
      price: 149, // [PLATZHALTER] €/Monat
      priceNote: "pro Monat",
      description: "Für Labels & Agenturen",
      features: [
        "Unbegrenzte Kampagnen",
        "Unbegrenzte Standorte",
        "Alle Analytics-Features",
        "Dedizierter Account Manager",
        "Unbegrenzte Bilder",
        "API-Zugang",
        "White-Label Option",
        "Multi-Account Support",
      ],
      limitations: [],
      cta: "Kontakt aufnehmen",
      highlighted: false,
    },
  ],
  
  // FAQ zu Preisen
  faq: [
    {
      question: "Was ist im Preis enthalten?",
      answer: "Der Preis beinhaltet den Zugang zum NBLR Tool. Dein Werbebudget für Meta (Facebook/Instagram) ist nicht enthalten – das zahlst du direkt an Meta.",
    },
    {
      question: "Gibt es eine kostenlose Testphase?",
      answer: "Ja! Beta-Nutzer erhalten [PLATZHALTER] Monate kostenlosen Zugang.", // [PLATZHALTER]
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer: "Ja, alle Pläne sind monatlich kündbar. Keine langfristigen Verträge.",
    },
    {
      question: "Wie viel sollte ich für Werbung ausgeben?",
      answer: "Wir empfehlen als Minimum 5€/Tag (ca. 150€/Monat). Für optimale Ergebnisse empfehlen wir 10-20€/Tag.",
    },
  ],
};

// ===== TESTIMONIALS =====
// [BEISPIEL] - Platzhalter-Testimonials, später durch echte ersetzen
export const TESTIMONIALS = {
  sectionTitle: "Was unsere Nutzer sagen",
  sectionSubtitle: "Erste Erfahrungen aus der Beta-Phase",
  
  testimonials: [
    {
      id: 1,
      name: "Max Mustermann", // [PLATZHALTER]
      role: "Solo-Künstler, Singer-Songwriter",
      location: "Köln",
      quote: "Endlich kann ich meine Konzerte bewerben, ohne eine Agentur bezahlen zu müssen. Die 5 Schritte sind wirklich so einfach wie versprochen!",
      avatar: null, // URL oder null für Placeholder
      rating: 5,
    },
    {
      id: 2,
      name: "Die Lokalheroen", // [PLATZHALTER]
      role: "Indie-Band",
      location: "Berlin",
      quote: "Wir haben unsere letzten 3 Konzerte über NBLR beworben und jedes Mal mehr Besucher gehabt als vorher. Das Geo-Targeting ist genial!",
      avatar: null,
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah K.", // [PLATZHALTER] - Cousin/Bekannte
      role: "DJ & Producerin",
      location: "Hamburg",
      quote: "Ich hab früher Stunden im Meta Business Manager verbracht. Mit NBLR dauert das gleiche 5 Minuten. Game Changer!",
      avatar: null,
      rating: 5,
    },
    {
      id: 4,
      name: "Akustik Trio München", // [PLATZHALTER]
      role: "Akustik-Ensemble",
      location: "München",
      quote: "Als kleine Band haben wir kein Budget für Marketing-Experten. NBLR gibt uns die Tools, die sonst nur große Acts haben.",
      avatar: null,
      rating: 4,
    },
  ],
  
  // Statistiken/Social Proof
  stats: [
    { value: "4.8", label: "Durchschnittliche Bewertung" },
    { value: "92%", label: "Würden uns weiterempfehlen" },
    { value: "3x", label: "Mehr Reichweite im Durchschnitt" },
  ],
};

// ===== FAQ =====
export const FAQ = {
  sectionTitle: "Häufig gestellte Fragen",
  
  categories: [
    {
      name: "Allgemein",
      questions: [
        {
          question: "Was ist NBLR Tool?",
          answer: "NBLR Tool ist eine Web-Anwendung, die es Künstlern und Bands ermöglicht, professionelle Meta Ads Kampagnen (Facebook & Instagram) in wenigen Minuten zu erstellen – ohne Vorkenntnisse oder teure Agentur.",
        },
        {
          question: "Für wen ist NBLR Tool geeignet?",
          answer: "NBLR Tool ist perfekt für: Solo-Künstler, Bands, DJs, lokale Musiker, kleine Labels und alle, die ihre Musik lokal bewerben möchten.",
        },
        {
          question: "Brauche ich Vorkenntnisse in Marketing?",
          answer: "Nein! Das ist der ganze Punkt von NBLR Tool. Unser 5-Schritt Workflow führt dich durch den gesamten Prozess. Wenn du eine Email schreiben kannst, kannst du auch NBLR Tool nutzen.",
        },
      ],
    },
    {
      name: "Technik & Setup",
      questions: [
        {
          question: "Brauche ich einen Facebook Business Account?",
          answer: "Ja, du brauchst einen Meta Business Account und einen Ad Account. Keine Sorge – wir zeigen dir genau, wie du diese einrichtest.",
        },
        {
          question: "Auf welchen Plattformen werden meine Ads gezeigt?",
          answer: "Deine Werbung wird auf Facebook und Instagram angezeigt – in Feeds, Stories und Reels.",
        },
        {
          question: "Wie lange dauert es, bis meine Kampagne live ist?",
          answer: "Nach dem Erstellen wird deine Kampagne von Meta geprüft. Das dauert normalerweise 1-24 Stunden. Sobald sie genehmigt ist, geht sie automatisch live.",
        },
      ],
    },
    {
      name: "Kosten & Budget",
      questions: [
        {
          question: "Was kostet NBLR Tool?",
          answer: "Unsere Pläne starten bei 29€/Monat. Das ist nur die Plattform-Gebühr – dein Werbebudget für Meta kommt dazu und geht direkt an Meta.",
        },
        {
          question: "Wie viel Werbebudget brauche ich?",
          answer: "Wir empfehlen mindestens 5€/Tag (ca. 150€/Monat). Für bessere Ergebnisse empfehlen wir 10-20€/Tag. Du entscheidest selbst!",
        },
        {
          question: "Gibt es versteckte Kosten?",
          answer: "Nein. Du zahlst nur den monatlichen Plan und dein selbst gewähltes Werbebudget an Meta. Keine Setup-Gebühren, keine Provisionen.",
        },
      ],
    },
  ],
};

// ===== GUIDELINES / RICHTLINIEN =====
// Empfehlungen für Nutzer – später auch als Tooltip verwendbar
export const GUIDELINES = {
  sectionTitle: "Best Practices",
  sectionSubtitle: "Tipps für erfolgreiche Kampagnen",
  
  categories: [
    {
      name: "Bilder",
      tips: [
        {
          title: "Hochwertige Fotos verwenden",
          description: "Professionelle oder gut belichtete Fotos performen besser. Vermeide verschwommene oder zu dunkle Bilder.",
          priority: "wichtig",
        },
        {
          title: "Wenig Text im Bild",
          description: "Meta bevorzugt Bilder mit wenig oder keinem Text. Dein Gesicht oder dein Instrument sollte im Fokus sein.",
          priority: "wichtig",
        },
        {
          title: "Quadratisches Format",
          description: "1:1 oder 4:5 Format funktioniert am besten für Feed-Anzeigen.",
          priority: "empfohlen",
        },
        {
          title: "Mehrere Bilder testen",
          description: "Lade 3-5 verschiedene Bilder hoch. Das System testet automatisch, welches am besten funktioniert.",
          priority: "empfohlen",
        },
      ],
    },
    {
      name: "Texte",
      tips: [
        {
          title: "Kurz und knackig",
          description: "Der Primary Text sollte in 2-3 Zeilen die wichtigste Info vermitteln. Was? Wann? Wo?",
          priority: "wichtig",
        },
        {
          title: "Call-to-Action",
          description: "Sag den Leuten, was sie tun sollen: 'Tickets sichern', 'Jetzt reinhören', 'Folge uns'.",
          priority: "wichtig",
        },
        {
          title: "Emoji sparsam einsetzen",
          description: "1-2 Emojis können Aufmerksamkeit erregen, zu viele wirken unseriös.",
          priority: "empfohlen",
        },
        {
          title: "Lokalen Bezug herstellen",
          description: "Erwähne die Stadt oder Region: 'Live in Köln', 'Für alle Hamburger'.",
          priority: "empfohlen",
        },
      ],
    },
    {
      name: "Budget",
      tips: [
        {
          title: "Mindestens 5€/Tag",
          description: "Unter 5€/Tag kann Meta deine Anzeigen nicht effektiv ausspielen.",
          priority: "wichtig",
        },
        {
          title: "7-14 Tage Laufzeit",
          description: "Kurze Kampagnen (unter 7 Tage) haben oft nicht genug Zeit zur Optimierung.",
          priority: "empfohlen",
        },
        {
          title: "Nicht alles auf einmal",
          description: "Starte mit einem moderaten Budget und erhöhe es, wenn du siehst, dass es funktioniert.",
          priority: "empfohlen",
        },
      ],
    },
    {
      name: "Targeting",
      tips: [
        {
          title: "Realistischen Radius wählen",
          description: "10-25 km ist oft der Sweet Spot. Zu groß = zu breit, zu klein = zu wenig Reichweite.",
          priority: "empfohlen",
        },
        {
          title: "Mehrere Standorte nutzen",
          description: "Wenn du in mehreren Städten spielst, erstelle Standorte für jede Stadt.",
          priority: "empfohlen",
        },
      ],
    },
  ],
};

// ===== BETA SIGNUP =====
export const BETA_SIGNUP = {
  title: "Beta-Zugang sichern",
  subtitle: "Werde einer der ersten Nutzer und erhalte exklusive Vorteile.",
  benefits: [
    "🎁 [PLATZHALTER] Monate kostenloser Zugang",
    "🚀 Früher Zugang zu neuen Features",
    "💬 Direkter Draht zum Entwickler-Team",
    "🏷️ Dauerhafter Beta-Rabatt",
  ],
  formFields: {
    name: { label: "Name", placeholder: "Dein Name", required: true },
    email: { label: "E-Mail", placeholder: "deine@email.de", required: true },
    artistType: {
      label: "Was beschreibt dich am besten?",
      required: true,
      options: [
        { value: "solo", label: "Solo-Künstler" },
        { value: "band", label: "Band" },
        { value: "dj", label: "DJ / Producer" },
        { value: "label", label: "Label / Agentur" },
        { value: "other", label: "Sonstiges" },
      ],
    },
    monthlyBudget: {
      label: "Geschätztes monatliches Werbebudget (optional)",
      required: false,
      options: [
        { value: "under100", label: "Unter 100€" },
        { value: "100-300", label: "100-300€" },
        { value: "300-500", label: "300-500€" },
        { value: "over500", label: "Über 500€" },
        { value: "unsure", label: "Weiß noch nicht" },
      ],
    },
    message: {
      label: "Nachricht (optional)",
      placeholder: "Erzähl uns kurz von deiner Musik...",
      required: false,
    },
  },
  submitButton: "Jetzt anmelden",
  successMessage: "Danke für deine Anmeldung! Wir melden uns bald bei dir.",
};

// ===== NAVIGATION =====
export const NAVIGATION = {
  logo: "NBLR",
  links: [
    { label: "Features", href: "/features" },
    { label: "Preise", href: "/pricing" },
    { label: "Erfahrungen", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Beta-Zugang", href: "/signup" },
};

// ===== FOOTER =====
export const FOOTER = {
  tagline: "Meta Ads für Künstler & Bands – einfach gemacht.",
  sections: [
    {
      title: "Produkt",
      links: [
        { label: "Features", href: "/features" },
        { label: "Preise", href: "/pricing" },
        { label: "Erfahrungen", href: "/testimonials" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Ressourcen",
      links: [
        { label: "Blog", href: "#" }, // [PLATZHALTER]
        { label: "Hilfe", href: "#" }, // [PLATZHALTER]
        { label: "Support", href: "mailto:kontakt@nblr-tool.de" }, // [PLATZHALTER]
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Nutzungsbedingungen", href: "/impressum" },
        { label: "Datenschutz", href: "/impressum" }, // TODO: Eigene Datenschutz-Seite
      ],
    },
  ],
  social: [
    { platform: "Instagram", url: "#" }, // [PLATZHALTER]
    { platform: "TikTok", url: "#" }, // [PLATZHALTER]
  ],
  copyright: `© ${new Date().getFullYear()} NBLR Tool. Alle Rechte vorbehalten.`,
};
