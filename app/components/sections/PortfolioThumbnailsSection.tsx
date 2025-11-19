type PortfolioThumbnailsSectionProps = {
  count?: number;
};

export function PortfolioThumbnailsSection({ count = 3 }: PortfolioThumbnailsSectionProps) {
  return (
    <section className="py-16 bg-white dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: count }).map((_, index) => (
            <div 
              key={index} 
              className="relative h-64 rounded-xl overflow-hidden bg-[var(--gray-100)] dark:bg-[var(--card)] border border-[var(--stroke)]"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

