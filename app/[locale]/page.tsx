"use client";

import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[var(--hero-section)] dark:bg-[var(--background)] px-4 py-20 pt-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(126, 34, 206, 0.1) 10px, rgba(126, 34, 206, 0.1) 20px)`,
          }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none px-4 py-2 text-base">
                    {t('hero.greeting')}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[var(--text-title)] dark:text-white">
                  {t('hero.title')}{" "}
                  <span className="font-semibold text-[var(--text-primary)]">{t('hero.titleHighlight')}</span>{" "}
                  {t('hero.titleEnd')}
                </h1>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto">
                  {t('hero.ctaPrimary')}
                  <ButtonArrow color="#ffffff" />
                </Button>
                <Button variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white rounded-full px-8 py-6 h-auto group">
                  {t('hero.ctaSecondary')}
                  <span className="transition-all duration-300 group-hover:rotate-45">
                    <ButtonArrow
                      className="transition-all duration-300"
                      color="#7e22ce"
                    />
                  </span>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-[var(--gray-300)]">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold text-[var(--text-primary)]">2+ {t('hero.stats.experience')}</p>
                  <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-300">{t('hero.stats.experienceLabel')}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold text-[var(--text-primary)]">3+</p>
                  <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-300">{t('hero.stats.projects')}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold text-[var(--text-primary)]">3+</p>
                  <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-300">{t('hero.stats.clients')}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-[var(--purple-100)] dark:bg-[var(--purple-800)] opacity-50 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--purple-100)] dark:border-[var(--purple-800)]">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--purple-100)] to-[var(--purple-300)] dark:from-[var(--purple-800)] dark:to-[var(--purple-700)] flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Thumbnails Section */}
      <section className="py-16 bg-white dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64 rounded-xl overflow-hidden bg-[var(--gray-100)] dark:bg-[var(--card)] border border-[var(--stroke)]">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('about.title')} <span className="text-[var(--text-primary)]">{t('about.titleHighlight')}</span>?
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Profile Image */}
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-[var(--purple-100)] dark:bg-[var(--purple-800)] opacity-50 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--purple-100)] dark:border-[var(--purple-800)]">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--purple-100)] to-[var(--purple-300)] dark:from-[var(--purple-800)] dark:to-[var(--purple-700)] flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-semibold text-[var(--text-title)] dark:text-white">
                {t('about.heading')}
              </h3>
              <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-primary)] hover:text-white transition-colors"
                  >
                    <span className="text-sm">{social[0]}</span>
                  </div>
                ))}
              </div>

              {/* Personal Skills */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
                  {t('about.personalSkills')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    t('skillsList.teamwork'),
                    t('skillsList.creativity'),
                    t('skillsList.problemSolving'),
                    t('skillsList.adaptability'),
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none px-4 py-2 text-base"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto w-fit mt-4">
                {t('about.downloadCV')}
                <ButtonArrow color="#ffffff" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('services.title')} <span className="text-[var(--text-primary)]">{t('services.titleHighlight')}</span>?
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Main Service Card */}
          <div className="mb-12">
            <div className="bg-[var(--text-primary)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white opacity-50" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-[var(--chips-bg)] flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">💻</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4">{t('services.webDevelopment')}</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {t('services.webDevelopmentDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('services.responsiveDesign'), icon: "📱" },
              { title: t('services.uiUxDesign'), icon: "🎨" },
              { title: t('services.webApplication'), icon: "⚡" },
              { title: t('services.ecommerce'), icon: "🛒" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[var(--text-primary)] rounded-2xl p-6 text-white hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-medium">{service.title}</h4>
                <p className="text-sm mt-2 opacity-80">
                  {t('services.serviceDesc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('skills.title')}
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Other Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
                {t('skills.otherSkills')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  t('skillsList.teamwork'),
                  t('skillsList.creativity'),
                  t('skillsList.problemSolving'),
                  t('skillsList.adaptability'),
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none px-4 py-2 text-base"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools and Workflow */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
                {t('skills.toolsWorkflow')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  t('toolsList.figma'),
                  t('toolsList.vscode'),
                  t('toolsList.git'),
                  t('toolsList.jira'),
                ].map((tool) => (
                  <Badge
                    key={tool}
                    className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none px-4 py-2 text-base"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
              {t('skills.technologies')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "SQL",
              ].map((tech) => (
                <Badge
                  key={tech}
                  className="bg-[var(--card)] dark:bg-[var(--card)] text-[var(--text-title)] dark:text-white border border-[var(--stroke)] px-4 py-2 text-base"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('portfolio.title')} <span className="text-[var(--text-primary)]">{t('portfolio.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: t('projects.mountainEscapade.title'),
                category: t('portfolio.webDesign'),
                description: t('projects.mountainEscapade.description'),
                technologies: t.raw('projects.mountainEscapade.tech') as string[],
              },
              {
                title: t('projects.ecommerce.title'),
                category: t('portfolio.webApp'),
                description: t('projects.ecommerce.description'),
                technologies: t.raw('projects.ecommerce.tech') as string[],
              },
              {
                title: t('projects.portfolio.title'),
                category: t('portfolio.webDesign'),
                description: t('projects.portfolio.description'),
                technologies: t.raw('projects.portfolio.tech') as string[],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 items-center bg-[var(--card)] dark:bg-[var(--card)] rounded-2xl p-8 border border-[var(--stroke)]"
              >
                <div className="relative h-64 rounded-xl overflow-hidden bg-[var(--gray-100)] dark:bg-[var(--card)]">
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600 flex items-center justify-center">
                    <span className="text-6xl">🖥️</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Badge className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none w-fit">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-semibold text-[var(--text-title)] dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 my-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full">
                      {t('portfolio.viewProject')}
                      <ButtonArrow color="#ffffff" />
                    </Button>
                    <Button variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white rounded-full">
                      {t('portfolio.liveDemo')}
                      <ButtonArrow color="#7e22ce" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto">
              {t('portfolio.viewAll')}
              <ButtonArrow color="#ffffff" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('testimonials.title')} <span className="text-[var(--text-primary)]">{t('testimonials.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: t('testimonialsList.sara.name'),
                role: t('testimonialsList.sara.role'),
                review: t('testimonialsList.sara.review'),
                rating: 5,
              },
              {
                name: t('testimonialsList.alex.name'),
                role: t('testimonialsList.alex.role'),
                review: t('testimonialsList.alex.review'),
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[var(--card)] dark:bg-[var(--card)] rounded-3xl p-8 border border-[var(--stroke)] relative"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-[var(--purple-100)] dark:bg-[var(--purple-800)] flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-[var(--text-subtitle)] dark:text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                    <div>
                      <p className="font-semibold text-[var(--text-title)] dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[var(--text-subtitle)] dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-[var(--card)] dark:bg-[var(--card)] rounded-2xl p-8 border border-[var(--stroke)]">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
                {t('contact.formTitle')}
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                    placeholder={t('contact.name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
                    {t('contact.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-xl py-6 h-auto"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
                  {t('contact.contactInfo')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-title)] dark:text-white">{t('contact.emailLabel')}</p>
                      <p className="text-[var(--text-subtitle)] dark:text-gray-300">contact@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-title)] dark:text-white">{t('contact.phoneLabel')}</p>
                      <p className="text-[var(--text-subtitle)] dark:text-gray-300">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-title)] dark:text-white">{t('contact.locationLabel')}</p>
                      <p className="text-[var(--text-subtitle)] dark:text-gray-300">Your City, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
                  {t('contact.followMe')}
                </h3>
                <div className="flex gap-4">
                  {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                    <div
                      key={social}
                      className="w-12 h-12 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-primary)] hover:text-white transition-colors"
                    >
                      <span className="text-sm">{social[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--footer)] text-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LOGO</h3>
              <p className="text-gray-300 mb-4">
                {t('footer.description')}
              </p>
              <Button className="bg-[var(--text-primary)] text-white hover:bg-[var(--text-primary)]/90 rounded-full">
                {t('about.downloadCV')}
                <ButtonArrow color="#ffffff" />
              </Button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#hero" className="hover:text-white transition-colors">{t('footer.home')}</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">{t('footer.services')}</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">{t('footer.portfolio')}</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">{t('footer.about')}</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">{t('footer.contact')}</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>contact@example.com</li>
                <li>+1 234 567 890</li>
                <li>Your City, Country</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Hazem Al-Saggaf. {t('footer.rights')}
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <span className="text-sm">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

