import { QrCode, Smartphone, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HowItWorksSection() {
  const { t } = useI18n();

  const steps = [
    {
      icon: QrCode,
      number: "1",
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.desc"),
    },
    {
      icon: Smartphone,
      number: "2",
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.desc"),
    },
    {
      icon: Heart,
      number: "3",
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.desc"),
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="section-padding relative overflow-hidden"
      style={{
        background: '#F8FAFC',
        transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Technical Grid Pattern - Fade-out edges */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)',
        }}
      />
      
      {/* Subtle orange gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(194, 65, 12, 0.06) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
      
      <div className="section-container relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-heading font-bold mb-14 text-center tracking-tight text-slate-900"
          style={{
            letterSpacing: '-0.04em',
          }}
        >
          {t("howItWorks.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="text-center relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div 
                className="w-20 h-20 rounded-3xl border flex items-center justify-center mx-auto mb-5 relative z-10 group backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '0.5px solid rgba(148, 163, 184, 0.3)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04), 0 0 40px hsl(var(--primary) / 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)';
                }}
              >
                <step.icon 
                  className="w-8 h-8 group-hover:scale-110" 
                  style={{ 
                    color: 'hsl(var(--primary))',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
              
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold mb-3 text-white"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
              >
                {step.number}
              </span>
              
              <h3 className="font-heading font-semibold mb-2 text-lg text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-800">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}