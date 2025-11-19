export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-5 dark:opacity-10">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(126, 34, 206, 0.1) 10px, rgba(126, 34, 206, 0.1) 20px)`,
        }} 
      />
    </div>
  );
}

