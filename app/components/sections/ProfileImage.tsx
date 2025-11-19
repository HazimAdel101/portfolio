type ProfileImageProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'w-48 h-48 md:w-56 md:h-56',
  md: 'w-64 h-64 md:w-80 md:h-80',
  lg: 'w-80 h-80 md:w-96 md:h-96',
};

export function ProfileImage({ size = 'md', className = '' }: ProfileImageProps) {
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 rounded-full bg-[var(--purple-100)] dark:bg-[var(--purple-800)] opacity-50 blur-2xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--purple-100)] dark:border-[var(--purple-800)]">
          <div className="w-full h-full bg-gradient-to-br from-[var(--purple-100)] to-[var(--purple-300)] dark:from-[var(--purple-800)] dark:to-[var(--purple-700)] flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>
  );
}

