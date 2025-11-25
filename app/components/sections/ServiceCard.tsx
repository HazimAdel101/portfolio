type ServiceCardProps = {
  title: string;
  icon: string;
  description?: string;
  variant?: 'featured' | 'default';
};

export function ServiceCard({ title, icon, description = '', variant = 'default' }: ServiceCardProps) {
  if (variant === 'featured') {
    return (
      <div className="bg-[var(--text-primary)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white opacity-50" />
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-20 h-20 rounded-full bg-[var(--chips-bg)] flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4">{title}</h3>
            <p className="text-lg leading-relaxed opacity-90">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--text-primary)] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="text-sm mt-2 opacity-80">{description}</p>
    </div>
  );
}

