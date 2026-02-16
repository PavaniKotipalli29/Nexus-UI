import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseProps, InputProps, CheckboxProps, SwitchProps, TextareaProps, SelectProps, RadioProps, SliderProps } from '../../types';
import { Button, Heading, Text, Icon, Box, Spinner, Label } from './Primitives';
import { Stack, Card } from './Layout';
import { Alert } from './Composite';

// Note: InputProps is now defined in types.ts

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  helperText,
  variant = 'default',
  isLoading = false,
  leftIcon,
  rightIcon,
  clearable = false,
  onClear,
  className = '',
  id,
  disabled,
  value,
  onChange,
  ...props
}) => {
  const baseInputStyles = "block w-full transition-all duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";
  
  const variants = {
    default: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md focus:border-primary-500 focus:ring-primary-500/20 shadow-sm",
    filled: "bg-neutral-100 dark:bg-neutral-800 border border-transparent rounded-md focus:bg-white dark:focus:bg-neutral-900 focus:border-primary-500 focus:ring-primary-500/20",
    ghost: "bg-transparent border border-transparent rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-900 focus:border-primary-500 focus:ring-primary-500/20",
    underline: "bg-transparent border-b border-neutral-200 dark:border-neutral-800 rounded-none px-0 focus:border-primary-500 focus:ring-0 shadow-none",
  };

  const statusStyles = error 
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
    : success 
    ? "border-green-500 focus:border-green-500 focus:ring-green-500/20" 
    : "";

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-500 transition-colors">
            {leftIcon}
          </div>
        )}
        
        <input
          id={id}
          disabled={disabled || isLoading}
          value={value}
          onChange={onChange}
          className={`
            ${baseInputStyles}
            ${variants[variant]}
            ${statusStyles}
            ${leftIcon ? 'pl-10' : 'pl-3'}
            ${(rightIcon || isLoading || clearable) ? 'pr-10' : 'pr-3'}
            py-2 text-sm
          `}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
          {isLoading ? (
            <svg className="animate-spin h-4 w-4 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : clearable && value && (
            <button 
              type="button" 
              onClick={onClear}
              className="p-0.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon>
            </button>
          )}
          
          {!isLoading && rightIcon && (
            <div className={`flex items-center text-neutral-400 group-focus-within:text-primary-500 transition-colors`}>
              {rightIcon}
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
        <Icon size="xs"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
        {error}
      </p>}
      
      {success && <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
        <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon>
        {success}
      </p>}
      
      {helperText && !error && !success && (
        <p className="text-xs text-neutral-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  variant = 'square',
  checked,
  onChange,
  disabled,
  hoverScale,
  tapScale,
  hoverOpacity,
  hoverColor,
  interactive,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const getBorderRadius = () => {
    switch (variant) {
      case 'circle': return 'rounded-full';
      case 'squircle': return 'rounded-[35%]';
      default: return 'rounded-md';
    }
  };

  return (
    <div className={`flex items-center space-x-2.5 group ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id={id}
          checked={internalChecked}
          onChange={handleChange}
          disabled={disabled}
          className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        
        <motion.div
          animate={{
            backgroundColor: internalChecked ? 'var(--primary-600, #2563eb)' : 'transparent',
            borderColor: internalChecked ? 'var(--primary-600, #2563eb)' : 'currentColor',
            scale: internalChecked ? [1, 1.1, 1] : 1,
          }}
          whileHover={interactive || hoverScale || hoverOpacity || hoverColor ? {
            scale: hoverScale || 1.05,
            opacity: hoverOpacity || 1,
          } : undefined}
          whileTap={interactive || tapScale ? {
            scale: tapScale || 0.95
          } : undefined}
          transition={{ duration: 0.2 }}
          className={`
            w-5 h-5 flex items-center justify-center border-2 
            text-neutral-300 dark:text-neutral-700
            ${getBorderRadius()}
            transition-colors duration-200
            peer-focus:ring-2 peer-focus:ring-primary-500/20
            group-hover:border-primary-500
            ${className}
          `}
          style={{
            borderColor: (interactive || hoverColor) ? hoverColor : undefined
          } as any}
        >
          <AnimatePresence>
            {internalChecked && (
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17L4 12" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer select-none group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export const Radio: React.FC<RadioProps> = ({
  label,
  id,
  className = '',
  checked,
  onChange,
  disabled,
  hoverScale,
  tapScale,
  hoverOpacity,
  hoverColor,
  interactive,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Radio buttons are slightly different: you can't uncheck them by clicking,
    // so we only update if it's becoming checked.
    if (checked === undefined && e.target.checked) {
      setInternalChecked(true);
    }
    onChange?.(e);
  };

  return (
    <div className={`flex items-center space-x-2.5 group ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          id={id}
          checked={internalChecked}
          onChange={handleChange}
          disabled={disabled}
          className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        
        <motion.div
          animate={{
            borderColor: internalChecked ? 'var(--primary-600, #2563eb)' : 'currentColor',
            scale: internalChecked ? [1, 1.05, 1] : 1,
            boxShadow: internalChecked ? '0 0 0 4px var(--primary-500/10, rgba(37, 99, 235, 0.1))' : 'none',
          }}
          whileHover={interactive || hoverScale || hoverOpacity || hoverColor ? {
            scale: hoverScale || 1.05,
            opacity: hoverOpacity || 1,
          } : undefined}
          whileTap={interactive || tapScale ? {
            scale: tapScale || 0.95
          } : undefined}
          transition={{ duration: 0.2 }}
          className={`
            w-5 h-5 rounded-full border-2 flex items-center justify-center
            text-neutral-300 dark:text-neutral-700
            transition-colors duration-200
            peer-focus:ring-2 peer-focus:ring-primary-500/20
            group-hover:border-primary-500
            ${className}
          `}
          style={{
            borderColor: (interactive || hoverColor) ? hoverColor : undefined
          } as any}
        >
          <AnimatePresence>
            {internalChecked && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-2.5 h-2.5 rounded-full bg-primary-600 dark:bg-primary-500"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer select-none group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  variant = 'default',
  disabled = false,
  className = '',
  ...props
}) => {
  const getContainerStyles = () => {
    switch (variant) {
      case 'ios':
        return `h-7 w-12 border-0 ${checked ? 'bg-green-500' : 'bg-neutral-200 dark:bg-neutral-800'}`;
      case 'slim':
        return `h-4 w-10 border-0 ${checked ? 'bg-primary-600/50' : 'bg-neutral-300 dark:bg-neutral-700'}`;
      default:
        return `h-6 w-11 border-2 ${checked ? 'bg-primary-600 border-primary-600' : 'bg-neutral-200 dark:bg-neutral-700 border-transparent'}`;
    }
  };

  const getThumbStyles = () => {
    switch (variant) {
      case 'ios':
        return 'h-6 w-6 bg-white shadow-md';
      case 'slim':
        return `h-6 w-6 -mt-1 -ml-1 ${checked ? 'bg-primary-600' : 'bg-neutral-100 dark:bg-neutral-400'} shadow-sm`;
      default:
        return 'h-5 w-5 bg-white shadow-sm';
    }
  };

  const thumbTransition = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`flex items-center space-x-3 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <motion.button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        className={`
          relative inline-flex flex-shrink-0 cursor-pointer rounded-full 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          ${getContainerStyles()}
          ${className}
        `}
        disabled={disabled}
        {...props}
      >
        <motion.span
          layout
          transition={thumbTransition}
          animate={{
            x: checked ? (variant === 'ios' ? 20 : variant === 'slim' ? 16 : 20) : 0,
            scale: 1,
          }}
          className={`
            pointer-events-none inline-block transform rounded-full ring-0 transition duration-200 ease-in-out
            ${getThumbStyles()}
          `}
        />
      </motion.button>
      {label && <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 select-none cursor-pointer" onClick={() => !disabled && onChange(!checked)}>{label}</span>}
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>
          <span className="text-sm text-neutral-500">{value}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700 accent-primary-600"
        {...props}
      />
    </div>
  );
};

// --- Form Building Blocks ---

// Note: Label is now imported from Primitives.tsx


export const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
    <Icon size="sm"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
    {children}
  </p>
);

export const FormField: React.FC<{ label?: string; htmlFor?: string; error?: string; required?: boolean; rightElement?: React.ReactNode; children: React.ReactNode }> = ({ label, htmlFor, error, required, rightElement, children }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-1">
      {label && <Label htmlFor={htmlFor} required={required}>{label}</Label>}
      {rightElement}
    </div>
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
);

export const FormWrapper: React.FC<{ onSubmit: (e: React.FormEvent) => void; children: React.ReactNode; className?: string }> = ({ onSubmit, children, className = '' }) => (
  <form 
    onSubmit={(e) => { e.preventDefault(); onSubmit(e); }} 
    className={`space-y-6 ${className}`}
  >
    {children}
  </form>
);

// --- Authentication Forms ---

export const LoginForm: React.FC<{
  onSubmit: (data: any) => void;
  onForgotPassword?: () => void;
  isLoading?: boolean;
  error?: string;
}> = ({ onSubmit, onForgotPassword, isLoading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, rememberMe });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <FormField label="Email" htmlFor="login-email" required>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField
        label="Password"
        htmlFor="login-password"
        required
        rightElement={
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Forgot password?
          </button>
        }
      >
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <div className="flex items-center justify-between">
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      <Button type="submit" fullWidth isLoading={isLoading} className="mt-2">
        Sign in
      </Button>
    </FormWrapper>
  );
};

export const SignupForm: React.FC<{
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  error?: string;
}> = ({ onSubmit, isLoading, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => onSubmit({ name, email, password, confirmPassword });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <FormField label="Full Name" htmlFor="signup-name" required>
        <Input
          id="signup-name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField label="Email" htmlFor="signup-email" required>
        <Input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField label="Password" htmlFor="signup-password" required>
        <Input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <PasswordStrengthMeter password={password} />
      </FormField>
      <FormField label="Confirm Password" htmlFor="signup-confirm-password" required>
        <Input
          id="signup-confirm-password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Create Account</Button>
    </FormWrapper>
  );
};

export const ForgotPasswordForm: React.FC<{
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  error?: string;
  success?: boolean;
}> = ({ onSubmit, isLoading, error, success }) => {
  const [email, setEmail] = useState('');

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <Icon size="md"><path d="M5 13l4 4L19 7"/></Icon>
        </div>
        <Heading level={4}>Check your email</Heading>
        <Text color="muted">We've sent a password reset link to <span className="font-medium text-neutral-900 dark:text-white">{email}</span>.</Text>
        <Button variant="outline" fullWidth onClick={() => window.location.reload()}>Back to login</Button>
      </div>
    );
  }

  return (
    <FormWrapper onSubmit={() => onSubmit({ email })}>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <Text color="muted" className="mb-4 text-sm">Enter your email address and we'll send you a link to reset your password.</Text>
      <FormField label="Email" htmlFor="forgot-email" required>
        <Input
          id="forgot-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Send Reset Link</Button>
      <div className="text-center mt-4">
        <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Back to login</a>
      </div>
    </FormWrapper>
  );
};

export const ResetPasswordForm: React.FC<{ onSubmit: (data: any) => void; isLoading?: boolean }> = ({ onSubmit, isLoading }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <FormWrapper onSubmit={() => onSubmit({ password, confirmPassword })}>
      <FormField label="New Password" htmlFor="reset-password" required>
        <Input id="reset-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <FormField label="Confirm Password" htmlFor="reset-confirm" required>
        <Input id="reset-confirm" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Reset Password</Button>
    </FormWrapper>
  );
};

// --- Specialized Inputs ---

export const OTPVerification: React.FC<{
  length?: number;
  onComplete: (code: string) => void;
  onResend?: () => void;
  isLoading?: boolean;
  error?: string;
}> = ({ length = 6, onComplete, onResend, isLoading, error }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = React.useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle focus on first render
  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.join('').length === length) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      onResend?.();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            disabled={isLoading}
            ref={(ref) => { inputs.current[index] = ref; }}
            className={`w-12 h-14 text-center text-xl font-bold bg-white dark:bg-neutral-900 border rounded-lg outline-none transition-all duration-200
              ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10'}
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
              shadow-sm
            `}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      {error && <p className="text-center text-xs text-red-600 font-medium animate-in fade-in slide-in-from-top-1">{error}</p>}

      <div className="text-center">
        <button
          onClick={handleResend}
          disabled={timer > 0 || isLoading}
          className={`text-sm font-medium ${timer > 0 ? 'text-neutral-400 cursor-not-allowed' : 'text-primary-600 hover:text-primary-700 underline underline-offset-4'}`}
        >
          {timer > 0 ? `Resend code in ${timer}s` : 'Resend verification code'}
        </button>
      </div>
    </div>
  );
};

export const PasswordStrengthMeter: React.FC<{ password: string }> = ({ password }) => {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(score, 4);
  };

  const strength = getStrength(password);
  const colors = ['bg-neutral-200', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['Empty', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="space-y-2 mt-2">
      <div className="flex gap-1 h-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level} 
            className={`flex-1 rounded-full transition-colors duration-300 ${level <= strength ? colors[strength] : 'bg-neutral-200 dark:bg-neutral-800'}`} 
          />
        ))}
      </div>
      <p className="text-xs text-right text-neutral-500">{labels[strength]}</p>
    </div>
  );
};

export const FileUpload: React.FC<{ label?: string; accept?: string }> = ({ label = "Upload file", accept }) => {
  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Icon size="md" className="text-neutral-400 mb-2"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></Icon>
          <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{accept ? `Accepts ${accept}` : 'Any file type'}</p>
        </div>
        <input type="file" className="hidden" accept={accept} />
      </label>
    </div>
  );
};

export const DatePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="date" 
      className="appearance-none" 
      leftIcon={<Icon size="sm"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></Icon>} 
    />
  );
};

export const TimePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="time" 
      className="appearance-none"
      leftIcon={<Icon size="sm"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>} 
    />
  );
};

export const SearchInput: React.FC<{ 
  placeholder?: string; 
  onSearch?: (val: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ placeholder = "Search...", onSearch, value, onChange, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <Icon size="sm" className="text-neutral-400"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md leading-5 bg-white dark:bg-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition duration-150 ease-in-out"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange?.(e);
          onSearch?.(e.target.value);
        }}
      />
    </div>
  );
};

