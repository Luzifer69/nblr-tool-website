/**
 * Card Komponente
 * Flexible Card-Komponente für Features, Testimonials, Pricing etc.
 */

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  hover?: boolean;
}

export function Card({ children, className = '', highlighted = false, hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800 rounded-2xl p-6 border transition-all duration-300
        ${highlighted 
          ? 'border-indigo-500 ring-2 ring-indigo-500/50 dark:ring-indigo-400/50' 
          : 'border-slate-200 dark:border-slate-700'}
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Feature Card Variante
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export function FeatureCard({ icon, title, description, details }: FeatureCardProps) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
          BETA
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      {details && details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
              <span className="text-emerald-600 dark:text-emerald-400 mr-2">✓</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

// Testimonial Card Variante
interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, role, location, quote, rating }: TestimonialCardProps) {
  return (
    <Card>
      <div className="flex items-center mb-4">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role} • {location}</p>
        </div>
      </div>
      
      {/* Rating Stars */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}>
            ★
          </span>
        ))}
      </div>
      
      <p className="text-slate-700 dark:text-slate-300 italic">"{quote}"</p>
    </Card>
  );
}

// Pricing Card Variante
interface PricingCardProps {
  name: string;
  price: number;
  priceNote: string;
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

export function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  limitations = [],
  cta,
  highlighted = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <Card highlighted={highlighted} className="flex flex-col h-full relative overflow-hidden">
      {highlighted && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold py-1 px-4 rounded-bl-xl">
          Empfohlen
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{name}</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">{price}€</span>
        <span className="text-slate-500 dark:text-slate-400 ml-2">{priceNote}</span>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
            <span className="text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0">✓</span>
            {feature}
          </li>
        ))}
        {limitations.map((limitation, index) => (
          <li key={`lim-${index}`} className="flex items-start text-slate-400 dark:text-slate-500">
            <span className="text-slate-300 dark:text-slate-600 mr-2 flex-shrink-0">✗</span>
            {limitation}
          </li>
        ))}
      </ul>
      
      <button
        onClick={onCtaClick}
        className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
        }`}
      >
        {cta}
      </button>
    </Card>
  );
}
