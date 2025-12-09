import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiX } from "react-icons/si";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/likhithc98-commits", label: "GitHub" },
  { icon: SiX, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:likhith.pharmd@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 lg:py-16 border-t border-primary/10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold tracking-tight inline-block"
              data-testid="link-footer-logo"
            >
              <span className="text-gradient-neon">C. Likhith</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              PharmD Graduate & Digital Health Innovator with 2 international publications. 
              Bridging clinical pharmacy with artificial intelligence to transform healthcare outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-fit"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={link.label}
                  data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} C. Likhith. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
