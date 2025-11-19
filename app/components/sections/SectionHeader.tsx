type SectionHeaderProps = {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({ title, titleHighlight, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
        {title}
        {titleHighlight && <span className="text-[var(--text-primary)]"> {titleHighlight}</span>}
      </h2>
      <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

