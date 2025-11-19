type StatCardProps = {
  value: string | number;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-3xl font-semibold text-[var(--text-primary)]">{value}</p>
      <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-300">{label}</p>
    </div>
  );
}

