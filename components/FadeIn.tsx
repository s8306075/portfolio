import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Delay in milliseconds
  className?: string;
  variant?: 'fade' | 'up' | 'scale';
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  className = '',
  variant = 'fade'
}: FadeInProps) => {
  
  const getAnimationClass = () => {
    switch (variant) {
      case 'up':
        return 'animate-[fadeIn_0.6s_ease-out_forwards]';
      case 'scale':
        return 'animate-[fadeIn_0.5s_ease-out_forwards]'; // Simplified to fade in for stability without keyframes for scale
      case 'fade':
      default:
        return 'animate-[fadeIn_0.8s_ease-out_forwards]';
    }
  };

  return (
    <div
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0, // Ensure it's hidden before animation starts
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;