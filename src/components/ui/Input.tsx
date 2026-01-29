/**
 * Input Komponenten
 * Wiederverwendbare Form-Elemente mit Validierung
 */

import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

// Base Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, className = '', ...props }: InputProps) {
  return (
    <div className="w-full group">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400">
        {label}
        {props.required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
      </label>
      <input
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-200
          bg-white dark:bg-slate-800 
          text-slate-900 dark:text-white
          placeholder-slate-400 dark:placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:shadow-lg focus:shadow-indigo-500/10
          ${error 
            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 ring-2 ring-red-500/20' 
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'}
          ${className}
        `}
        {...props}
      />
      {hint && !error && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1 animate-pulse">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

// Select Dropdown
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  hint?: string;
}

export function Select({ label, options, error, hint, className = '', ...props }: SelectProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        {label}
        {props.required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
      </label>
      <select
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-200 appearance-none
          bg-white dark:bg-slate-800 
          text-slate-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          ${error 
            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'}
          ${className}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: '1.5rem',
          backgroundPosition: 'right 0.75rem center',
          backgroundRepeat: 'no-repeat',
          paddingRight: '2.5rem',
        }}
        {...props}
      >
        <option value="">Bitte wählen...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && !error && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

// Textarea
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Textarea({ label, error, hint, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        {label}
        {props.required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
      </label>
      <textarea
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-200 resize-none
          bg-white dark:bg-slate-800 
          text-slate-900 dark:text-white
          placeholder-slate-400 dark:placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          ${error 
            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'}
          ${className}
        `}
        rows={4}
        {...props}
      />
      {hint && !error && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}