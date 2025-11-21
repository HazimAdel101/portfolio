import type { SocialLink } from '@/app/types';

type SocialLinksProps = {
  links: readonly SocialLink[];
  variant?: 'default' | 'footer';
  className?: string;
};

export function SocialLinks({ links, variant = 'default', className = '' }: SocialLinksProps) {
  const baseClasses = variant === 'footer' 
    ? 'w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors'
    : 'w-10 h-10 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-primary)] hover:text-white transition-colors';

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url || '#'}
          className={baseClasses}
          aria-label={social.name}
        >
          <span className="text-sm">{social.name[0]}</span>
        </a>
      ))}
    </div>
  );
}

