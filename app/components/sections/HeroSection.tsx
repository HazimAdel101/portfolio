"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { ProfileImage } from "./ProfileImage";
import { StatCard } from "./StatCard";
import { BackgroundPattern } from "./BackgroundPattern";
import { useHeroData } from "@/app/hooks";
import Image from "next/image";

export function HeroSection() {
  const {
    greeting,
    title,
    titleHighlight,
    titleEnd,
    ctaPrimary,
    ctaSecondary,
    stats,
  } = useHeroData();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[var(--hero-section)] dark:bg-[var(--background)] px-4 py-20 pt-32 overflow-hidden"
    >
      <BackgroundPattern />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative ms-6 w-fit">
                <Image
                  className="absolute -top-4 -end-8 rtl:rotate-[270deg]"
                  src="/hello-icon.svg"
                  alt="Greeting"
                  width={28}
                  height={28}
                />
                <span className="flex items-center gap-2">{greeting}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[var(--text-title)] dark:text-white">
                {title}{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  {titleHighlight}
                </span>{" "}
                {titleEnd}
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto">
                {ctaPrimary}
                <ButtonArrow color="#ffffff" />
              </Button>
              <Button
                variant="outline"
                className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white rounded-full px-8 py-6 h-auto group"
              >
                {ctaSecondary}
                <span className="transition-all duration-300 group-hover:rotate-45">
                  <ButtonArrow
                    className="transition-all duration-300"
                    color="#7e22ce"
                  />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, index) => (
                <>
                  <StatCard key={index} value={stat.value} label={stat.label} />
                  <div className="h-16 bg-[#D1D5DB] w-[1px]"></div>
                </>
              ))}
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
