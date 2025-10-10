import { Button } from "@/components/ui/button";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-text-title text-3xl font-bold">
            Portfolio Design System
          </h1>
          <Button>Click me</Button>
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}
