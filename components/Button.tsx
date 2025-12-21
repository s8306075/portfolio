import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: ReactNode;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-sunfire text-white border border-transparent shadow-md shadow-sunfire/25 hover:bg-sunfire/90 hover:shadow-lg hover:shadow-sunfire/40 hover:-translate-y-0.5 focus:ring-sunfire transition-all",
    secondary: "bg-navy text-white hover:bg-slate-700 focus:ring-navy",
    outline: "bg-transparent border border-taupe text-charcoal hover:border-navy hover:bg-white/40 hover:shadow-[0_2px_6px_rgba(0,0,0,0.08)] focus:ring-navy/40"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;