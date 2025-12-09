import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Stethoscope, Code } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Python & AI Intern",
    company: "CodeFobe",
    location: "Remote",
    period: "Mar 2025 - Aug 2025",
    duration: "6 months",
    type: "Internship",
    icon: Code,
    description:
      "Intensive 6-month bootcamp and internship focused on Python programming, data science, and artificial intelligence applications in healthcare.",
    achievements: [
      "Mastered Python programming fundamentals and advanced concepts",
      "Built machine learning models using TensorFlow and Keras for healthcare applications",
      "Developed data analytics pipelines with Pandas and NumPy for medical data",
      "Implemented SQL databases for healthcare data management",
      "Created interactive data visualizations using Matplotlib, Seaborn, and Plotly",
      "Learned Natural Language Processing and AI automation techniques",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "SQL", "NLP", "Machine Learning"],
  },
  {
    id: 2,
    title: "Clinical Pharmacy Intern",
    company: "SVRR Government Hospital",
    location: "Andhra Pradesh, India",
    period: "Apr 2024 - Mar 2025",
    duration: "12 months",
    type: "Clinical Rotation",
    icon: Stethoscope,
    description:
      "Comprehensive clinical pharmacy internship with rotations across multiple departments, gaining hands-on experience in patient care, medication management, and pharmacovigilance.",
    rotations: [
      { department: "General Medicine", duration: "6 months", focus: "Comprehensive medication therapy management and patient counseling" },
      { department: "Surgery", duration: "2 months", focus: "Perioperative pharmaceutical care and antibiotic stewardship" },
      { department: "Pediatrics", duration: "2 months", focus: "Age-appropriate dosing, formulations, and pediatric counseling" },
      { department: "Dermatology", duration: "2 months", focus: "Topical medication expertise and dermatological drug therapy" },
    ],
    achievements: [
      "Conducted drug utilization reviews and medication reconciliation",
      "Performed pharmacovigilance monitoring and ADR reporting",
      "Participated in clinical ward rounds with healthcare teams",
      "Provided patient counseling on medication use and adherence",
    ],
    technologies: ["Clinical Pharmacy", "Patient Care", "Medication Management", "Drug Safety", "Pharmacovigilance"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 bg-card/30"
      data-testid="section-experience"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient-neon">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blending clinical expertise with cutting-edge AI skills
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 hidden md:block" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-testid={`experience-${exp.id}`}
              >
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 animate-glow-pulse" />

                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <Card className="glass-card glass-card-hover p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <exp.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary bg-primary/5"
                      >
                        {exp.duration}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.rotations && (
                      <div className="mb-4 p-4 rounded-lg bg-background/50 border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-3">Clinical Rotations</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {exp.rotations.map((rotation) => (
                            <div key={rotation.department} className="text-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-foreground">{rotation.department}</span>
                                <Badge variant="secondary" className="text-xs">{rotation.duration}</Badge>
                              </div>
                              <p className="text-muted-foreground text-xs mt-1">{rotation.focus}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
