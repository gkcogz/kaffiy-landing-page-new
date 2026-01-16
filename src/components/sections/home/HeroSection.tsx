import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import kaffiyTebrikler from "@/assets/kaffiy-tebrikler.png";
import kaffiyDashboardLaptop from "@/assets/kaffiy_dashboard_no_bg.png";

export function HeroSection() {
  const { t, language } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const accentColor = "hsl(var(--primary) / 0.9)";

  // Parallax effect for blobs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="overflow-hidden relative pt-12 md:pt-14 pb-8 md:pb-10" 
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

      {/* Subtle theme-colored radial gradients for warmth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Behind text area (left) */}
        <div 
          className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            opacity: 0.08,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)`,
            animation: 'float 20s ease-in-out infinite',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.1s ease-out, background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Blob 2 - Behind laptop (right) */}
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[400px] rounded-full blur-3xl"
          style={{
            opacity: 0.06,
            background: `radial-gradient(ellipse, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 40%, transparent 70%)`,
            animation: 'float 25s ease-in-out infinite reverse',
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.1s ease-out, background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>

      <div className="section-container relative z-10 px-4 sm:px-4 lg:px-6">
        <div className="relative flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[500px] lg:gap-6 xl:gap-8">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:w-[50%] xl:w-[48%] relative z-20 lg:pt-0">
            <div className="relative z-10">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-heading mb-6 leading-[1.15] animate-fade-in-up tracking-tight"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#0F172A', // Slate-900
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {(() => {
                  const headline = t("hero.headline");
                  // Highlight "Kopmaz Bağlar" in Turkish or "Unbreakable Bonds" in English
                  const highlightPhrase = language === "tr" ? "Kopmaz Bağlar" : "Unbreakable Bonds";
                  const regex = new RegExp(`(${highlightPhrase})`, "i");
                  return headline.split(regex).map((part, index) => 
                    regex.test(part) ? (
                      <span key={index} style={{ color: accentColor }}>{part}</span>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  );
                })()}
              </h1>

              <p 
                className="text-lg md:text-xl lg:text-2xl mb-8 leading-[1.8] animate-fade-in-up max-w-[32rem] mx-auto lg:mx-0" 
                style={{ 
                  animationDelay: "0.1s",
                  color: '#1E293B', // Slate-800
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {t("hero.subheadline")}
              </p>

            <div 
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up" 
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col items-center sm:items-start gap-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:opacity-90 rounded-xl px-12 h-14 text-base font-semibold hover:-translate-y-1 hover:scale-105 relative group"
                  style={{
                    backgroundColor: accentColor,
                    borderColor: accentColor,
                    boxShadow: '0 4px 20px hsl(var(--primary) / 0.25)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 35px hsl(var(--primary) / 0.35), 0 0 50px hsl(var(--primary) / 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px hsl(var(--primary) / 0.25)';
                  }}
                >
                  <Link to="/contact">
                    {t("hero.cta.primary")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                    {/* Glow effect on hover */}
                    <span 
                      className="absolute inset-0 rounded-xl bg-primary opacity-0 group-hover:opacity-20 blur-xl -z-10" 
                      style={{
                        backgroundColor: accentColor,
                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </Link>
                </Button>
                <span 
                  className="text-xs font-medium"
                  style={{
                    color: 'hsl(var(--muted-foreground))',
                    opacity: 0.7,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {t("hero.cta.setup")}
                </span>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-xl px-10 h-14 text-base border-border hover:bg-secondary"
                style={{
                  color: accentColor,
                  borderColor: accentColor,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                asChild
              >
                <a href="#how-it-works">{t("hero.cta.secondary")}</a>
              </Button>
            </div>
            </div>
          </div>

          {/* Right - Dashboard + Laptop + Phone Mockup */}
          <div 
            className="relative flex justify-center lg:justify-end animate-fade-in-up order-1 lg:order-2 mb-6 lg:mb-0 lg:w-[50%] xl:w-[52%] lg:z-30 lg:pt-0" 
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10 flex items-end gap-3 lg:gap-4 max-w-full overflow-visible scale-75 sm:scale-80 md:scale-85 lg:scale-85 xl:scale-90">
              {/* Dashboard + Laptop Image */}
              <div className="relative flex-shrink-0">
                {/* Ground shadow - Theme-colored shadow */}
                <div 
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[140%] h-20 rounded-full blur-2xl transition-all duration-500"
                  style={{
                    opacity: 0.15,
                    background: `radial-gradient(ellipse, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 30%, hsl(var(--primary) / 0.05) 50%, transparent 70%)`,
                    filter: 'blur(40px)',
                  }}
                />
                <img 
                  src={kaffiyDashboardLaptop}
                  alt="Kaffiy Dashboard + Laptop" 
                  className="w-full h-auto relative z-10"
                  style={{
                    maxWidth: '520px',
                  }}
                />
              </div>

              {/* Phone mockup - Premium design */}
              <div 
                className="relative rounded-[2.5rem] p-[4px] shadow-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-black flex-shrink-0 transition-all duration-500"
                style={{ 
                  width: 'min(90px, 20vw)', 
                  maxWidth: '110px',
                  boxShadow: `
                    0 20px 50px hsl(var(--primary) / 0.15),
                    0 10px 25px hsl(var(--primary) / 0.1),
                    0 4px 12px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                {/* Outer glow effect */}
                <div 
                  className="absolute -inset-1 rounded-[2.5rem] opacity-30 blur-xl"
                  style={{
                    background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
                  }}
                />
                
                {/* Frame inner shadow */}
                <div 
                  className="absolute inset-[4px] rounded-[2.1rem] pointer-events-none z-30"
                  style={{
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 -1px 4px rgba(255, 255, 255, 0.1)',
                  }}
                />
                
                {/* Dynamic Island - Modern design */}
                <div 
                  className="absolute top-2 left-1/2 -translate-x-1/2 z-40 rounded-full bg-black/95 backdrop-blur-md"
                  style={{
                    width: '28px',
                    height: '6px',
                    boxShadow: `
                      inset 0 1px 3px rgba(0, 0, 0, 0.5),
                      0 0 0 0.5px rgba(255, 255, 255, 0.08),
                      0 2px 4px rgba(0, 0, 0, 0.3)
                    `,
                  }}
                />
                
                {/* Screen - Premium design with better border radius */}
                <div 
                  className="relative rounded-[2.1rem] overflow-hidden bg-white shadow-inner"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img 
                    src={kaffiyTebrikler}
                    alt="Tebrikler Ekranı" 
                    className="w-full h-auto"
                  />
                  
                  {/* Screen reflection overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(0,0,0,0.05) 100%)',
                    }}
                  />
                </div>
                
                {/* Home indicator - Modern design */}
                <div 
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-40 rounded-full bg-white/60 backdrop-blur-md"
                  style={{
                    width: '40px',
                    height: '4px',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                  }}
                />
                
                {/* Side bezel highlights */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[60%] rounded-r-full pointer-events-none z-30"
                  style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                  }}
                />
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[60%] rounded-l-full pointer-events-none z-30"
                  style={{
                    background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
