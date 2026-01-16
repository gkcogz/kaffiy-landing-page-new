import { useI18n } from "@/lib/i18n";
import dashboardImage from "@/assets/kaffiy_dashboard_no_bg.png";

export function DashboardPreviewSection() {
  const { t } = useI18n();

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
          background: `radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.06) 0%, transparent 60%)`,
          filter: 'blur(100px)',
          transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-slate-900"
              style={{
                letterSpacing: '-0.04em',
              }}
            >
              {t("dashboard.title")}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-800">
              {t("dashboard.desc")}
            </p>
          </div>

          {/* Desktop Mockup with Dashboard Screenshot */}
          <div className="animate-fade-in-up">
            {/* Browser/Desktop Mockup Frame - Theme-colored shadow */}
            <div 
              className="bg-card rounded-2xl border overflow-hidden relative backdrop-blur-sm"
              style={{
                border: '0.5px solid rgba(148, 163, 184, 0.3)',
                boxShadow: `0 20px 60px hsl(var(--primary) / 0.15), 0 10px 30px hsl(var(--primary) / 0.1), 0 4px 12px rgba(0, 0, 0, 0.08)`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Browser Header */}
              <div className="bg-secondary/70 px-4 py-3 border-b border-border flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-terracotta/60" />
                  <div className="w-3 h-3 rounded-full bg-accent-foreground/40" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground font-medium flex items-center gap-2">
                    <span className="text-xs">🔒</span>
                    dashboard.kaffiy.com
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative">
                <img 
                  src={dashboardImage} 
                  alt="Kaffiy Dashboard - Kafe sahipleri için gerçek zamanlı analitik paneli" 
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
