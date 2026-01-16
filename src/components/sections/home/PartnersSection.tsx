import { useI18n } from "@/lib/i18n";

// Haliç Kahve Logo SVG Component
function HalicKahveLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* White C - Bold uppercase letter with uniform stroke */}
      <path
        d="M 40 100 
           A 60 60 0 0 1 100 40
           L 100 60
           A 40 40 0 0 0 60 100
           A 40 40 0 0 0 100 140
           L 100 160
           A 60 60 0 0 1 40 100 Z"
        fill="white"
      />
      {/* Red horizontal bar extending from the open right side of C */}
      <rect
        x="100"
        y="75"
        width="35"
        height="50"
        fill="#DC2626"
      />
    </svg>
  );
}

export function PartnersSection() {
  const { t } = useI18n();

  const partners = [
    {
      name: "Haliç Kahve",
      logo: HalicKahveLogo,
    },
  ];

  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{
        background: '#F8FAFC',
        transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Subtle theme-colored gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 60%)`,
          filter: 'blur(100px)',
          transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center tracking-tight text-slate-900">
            {t("partners.title")}
          </h2>
          <p className="text-center mb-12 text-lg text-slate-800">
            {t("partners.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {partners.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center px-8 py-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {LogoComponent && (
                    <div className="mb-4 w-24 h-24 bg-black rounded-xl p-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <LogoComponent className="w-full h-full" />
                    </div>
                  )}
                  <span className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
