/**
 * Beta Sign-Up Page
 * Formular mit Validierung für Beta-Anmeldung
 */

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Input, Select, Textarea, Button, HintBox } from '../components/ui';
import { BETA_SIGNUP } from '../data/siteContent';

interface FormData {
  name: string;
  email: string;
  artistType: string;
  monthlyBudget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  artistType?: string;
}

// Lokaler Storage für Anmeldungen (Mock API)
const saveSignup = (data: FormData) => {
  const existingSignups = JSON.parse(localStorage.getItem('beta_signups') || '[]');
  existingSignups.push({
    ...data,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem('beta_signups', JSON.stringify(existingSignups));
};

export function BetaSignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    artistType: '',
    monthlyBudget: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name Validierung
    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.';
    }
    
    // Email Validierung
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }
    
    // Künstler-Typ Validierung
    if (!formData.artistType) {
      newErrors.artistType = 'Bitte wähle eine Option.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuliere API Call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Speichere lokal
    saveSignup(formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 py-32 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {BETA_SIGNUP.successMessage}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Du erhältst in Kürze eine Bestätigung per E-Mail. 
            In der Zwischenzeit kannst du dir unsere Features ansehen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => window.location.href = '/features'}>
              Features entdecken
            </Button>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Noch jemanden anmelden
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {BETA_SIGNUP.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {BETA_SIGNUP.subtitle}
          </p>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {BETA_SIGNUP.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20"
              >
                <span className="text-2xl">{benefit.split(' ')[0]}</span>
                <span className="text-slate-700 dark:text-slate-300">{benefit.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <Input
                label={BETA_SIGNUP.formFields.name.label}
                placeholder={BETA_SIGNUP.formFields.name.placeholder}
                required={BETA_SIGNUP.formFields.name.required}
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
              />
              
              {/* Email */}
              <Input
                type="email"
                label={BETA_SIGNUP.formFields.email.label}
                placeholder={BETA_SIGNUP.formFields.email.placeholder}
                required={BETA_SIGNUP.formFields.email.required}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
              />
              
              {/* Artist Type */}
              <Select
                label={BETA_SIGNUP.formFields.artistType.label}
                options={BETA_SIGNUP.formFields.artistType.options}
                required={BETA_SIGNUP.formFields.artistType.required}
                value={formData.artistType}
                onChange={(e) => handleChange('artistType', e.target.value)}
                error={errors.artistType}
              />
              
              {/* Monthly Budget (Optional) */}
              <Select
                label={BETA_SIGNUP.formFields.monthlyBudget.label}
                options={BETA_SIGNUP.formFields.monthlyBudget.options}
                required={BETA_SIGNUP.formFields.monthlyBudget.required}
                value={formData.monthlyBudget}
                onChange={(e) => handleChange('monthlyBudget', e.target.value)}
                hint="💡 Hilft uns, das Tool besser auf dich zuzuschneiden. Keine Bindung!"
              />
              
              {/* Message (Optional) */}
              <Textarea
                label={BETA_SIGNUP.formFields.message.label}
                placeholder={BETA_SIGNUP.formFields.message.placeholder}
                required={BETA_SIGNUP.formFields.message.required}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                hint="💬 Erzähl uns von deiner Musik! Was ist dein Ziel?"
              />
              
              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : BETA_SIGNUP.submitButton}
              </Button>
            </form>
            
            {/* Privacy Note */}
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-6">
              Mit der Anmeldung stimmst du unseren Datenschutzrichtlinien zu. 
              Wir verwenden deine Daten nur, um dich über NBLR Tool zu informieren.
            </p>
          </div>
          
          {/* Hint */}
          <div className="mt-8">
            <HintBox type="tip">
              <strong>Tipp:</strong> Je früher du dich anmeldest, desto früher erhältst du Zugang. 
              Beta-Tester bekommen außerdem dauerhaft vergünstigte Preise!
            </HintBox>
          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Sichere Daten</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📧</span>
              <span className="text-sm">Kein Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚫</span>
              <span className="text-sm">Jederzeit abmelden</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
