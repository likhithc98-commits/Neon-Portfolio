import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 animated-gradient" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Open to opportunities
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient-neon">C. Likhith</span>
            </h1>

            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Digital Health Innovator & PharmD Graduate
            </h2>

            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              Bridging{" "}
              <span className="text-foreground font-medium">
                Clinical Pharmacy
              </span>{" "}
              with{" "}
              <span className="text-foreground font-medium">
                Artificial Intelligence
              </span>
              . Python & AI certified professional with{" "}
              <span className="text-foreground font-medium">2 international publications</span>{" "}
              in Scopus-indexed journals. Specializing in healthcare analytics, 
              pharmacovigilance, and drug safety innovations.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="neon-glow min-w-[160px]"
                data-testid="button-view-projects"
              >
                View Publications
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="min-w-[160px] border-primary/30 hover:border-primary/60"
                data-testid="button-contact-hero"
              >
                Contact Me
              </Button>
            </div>

            <div
              className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/likhithc98-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                data-testid="link-github"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                data-testid="link-twitter"
              >
                <SiX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:likhith.pharmd@gmail.com"
                className="p-3 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-primary/50 p-1 animate-glow-pulse">
                <Avatar className="w-full h-full">
                  <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                    CL
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 animate-bounce-slow"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
}
