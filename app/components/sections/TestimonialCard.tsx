type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
  rating: number;
};

export function TestimonialCard({ name, role, review, rating }: TestimonialCardProps) {
  return (
    <div className="bg-[var(--card)] dark:bg-[var(--card)] rounded-3xl p-8 border border-[var(--stroke)] relative">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full bg-[var(--purple-100)] dark:bg-[var(--purple-800)] flex items-center justify-center flex-shrink-0">
          <span className="text-3xl">👤</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">⭐</span>
            ))}
          </div>
          <p className="text-[var(--text-subtitle)] dark:text-gray-300 mb-4 leading-relaxed">
            &ldquo;{review}&rdquo;
          </p>
          <div>
            <p className="font-semibold text-[var(--text-title)] dark:text-white">
              {name}
            </p>
            <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

