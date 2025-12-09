import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, FileText, Globe } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "PharmD", label: "Doctor of Pharmacy" },
  { icon: Briefcase, value: "18+", label: "Months Experience" },
  { icon: Award, value: "6+", label: "Certifications" },
  { icon: FileText, value: "2", label: "International Publications" },
];

const education = [
  {
    degree: "Doctor of Pharmacy (Pharm.D)",
    institution: "Jawaharlal Nehru Technological University",
    period: "Sep 2019 - Mar 2025",
    grade: "Grade A",
    activities: ["IPA Student Chapter", "Clinical Pharmacy Society", "Community Health Outreach", "NSS Volunteer"],
  },
  {
    degree: "Intermediate (BiPC)",
    institution: "Sri Chaitanya College of Education",
    period: "2017",
    grade: "Grade A",
    subjects: "Biology, Physics, Chemistry",
  },
];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
  { name: "Telugu", level: "Professional" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient-neon">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-medium">
                Doctor of Pharmacy (PharmD)
              </span>{" "}
              graduate from JNTUA with expertise in clinical practices, pharmacovigilance, 
              and drug development. My passion lies at the intersection of 
              healthcare and technology.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've completed an intensive{" "}
              <span className="text-foreground font-medium">
                6-month Python & AI Bootcamp
              </span>{" "}
              at CodeFobe and the{" "}
              <span className="text-foreground font-medium">
                Generative AI Mastermind
              </span>{" "}
              program at Outskill, equipping me with cutting-edge skills in 
              machine learning, data analytics, and healthcare AI applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As a{" "}
              <span className="text-foreground font-medium">
                published researcher
              </span>{" "}
              with 2 international publications in Scopus-indexed journals (JPTCP and IJCPMS), 
              I combine academic rigor with practical AI implementation to drive 
              innovation in digital health solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Healthcare Analytics",
                  "Pharmacovigilance",
                  "Drug Safety",
                  "Clinical Pharmacy",
                  "Machine Learning",
                  "Generative AI",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-primary/30 bg-primary/5 text-primary"
                    data-testid={`badge-focus-${area.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-primary/10"
                  >
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gradient-neon mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="pl-4 border-l-2 border-primary/30"
                  >
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.period} | {edu.grade}
                    </p>
                    {edu.activities && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {edu.activities.map((activity) => (
                          <Badge key={activity} variant="secondary" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
