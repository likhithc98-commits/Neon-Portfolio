import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiJupyter,
} from "react-icons/si";
import { Brain, Database, BarChart3, Code, HeartPulse, Beaker, Shield, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & AI",
    icon: Brain,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "SQL", icon: Database },
      { name: "Data Analysis", icon: BarChart3 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: [
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: BarChart3 },
      { name: "Plotly", icon: SiPlotly },
    ],
  },
  {
    title: "Machine Learning",
    icon: Code,
    description: "Deep Learning, Neural Networks, Natural Language Processing, Predictive Modeling, Model Optimization, Feature Engineering, LLMs, Generative AI, Prompt Engineering",
  },
  {
    title: "Clinical Pharmacy",
    icon: HeartPulse,
    description: "Patient Care, Medication Management, Therapeutic Drug Monitoring, Clinical Pharmacokinetics, Evidence-Based Medicine, Drug Utilization Review, Medication Reconciliation, Clinical Interventions",
  },
  {
    title: "Pharmacovigilance & Safety",
    icon: Shield,
    description: "Drug Safety, Adverse Drug Reaction Monitoring, Signal Detection, Regulatory Affairs, Quality Assurance, Patient Safety, HIPAA Compliance, Clinical Documentation",
  },
];

const allSkills = {
  "Digital Health & Analytics": [
    "Digital Health", "Healthcare Analytics", "Healthcare IT", "Pharmacy Informatics", 
    "Clinical Data Management", "Health Information Systems"
  ],
  "Clinical Expertise": [
    "Pharmacovigilance", "Drug Safety", "Clinical Pharmacy", "Patient Care", 
    "Medication Management", "Therapeutic Drug Monitoring", "Clinical Pharmacokinetics",
    "Evidence-Based Medicine", "Drug Utilization Review", "Medication Reconciliation",
    "Clinical Research", "Hepatology"
  ],
  "AI & Programming": [
    "Python", "SQL", "Machine Learning", "Deep Learning", "TensorFlow", "Keras",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn",
    "Natural Language Processing", "Large Language Models", "Generative AI",
    "Prompt Engineering", "AI Automation", "Custom GPT Development"
  ],
  "Data & Research": [
    "Data Analysis", "Data Visualization", "Statistical Analysis", "SPSS",
    "Research Methodology", "Analytical Skills", "Data Management", "Data Collection",
    "Predictive Modeling", "Web APIs"
  ],
  "Regulatory & Quality": [
    "Regulatory Affairs", "Quality Assurance", "Patient Safety", "No-Code Development"
  ],
};

const certifications = [
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Oct 2025",
    skills: ["AI Automation", "Prompt Engineering", "LLMs", "Custom GPT Development", "Generative AI"],
    featured: true,
  },
  {
    name: "Python Bootcamp with Artificial Intelligence",
    issuer: "CodeFobe",
    date: "Aug 2025",
    skills: ["Python", "Machine Learning", "TensorFlow", "Keras", "Data Visualization", "NLP"],
    featured: true,
  },
  {
    name: "Python & AI Internship Certificate",
    issuer: "CodeFobe",
    date: "Aug 2025",
    skills: ["Python", "AI", "Healthcare Tech"],
  },
  {
    name: "Clinical Pharmacy Internship Certification",
    issuer: "Sri Padmavati School of Pharmacy",
    date: "Mar 2025",
    skills: ["Clinical Pharmacy", "Patient Care", "Medication Management"],
  },
  {
    name: "CME on Pharmacovigilance",
    issuer: "SVIMS, Tirupati",
    date: "Sep 2024",
    skills: ["Pharmacovigilance", "Drug Safety", "Clinical Research"],
  },
  {
    name: "NSS Volunteer Certificate",
    issuer: "National Service Scheme",
    date: "Mar 2025",
    skills: ["Community Service", "Leadership"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-32"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-neon">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            70+ skills spanning pharmaceutical expertise and modern AI technologies
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="glass-card p-6 lg:p-8 group hover:border-primary/30 transition-all duration-300"
              data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {category.skills ? (
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/5 transition-colors group/skill"
                    >
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover/skill:text-primary transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              )}
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Complete <span className="text-gradient-neon">Skills</span> Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(allSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="glass-card rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gradient-neon">Certifications</span> & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  cert.featured
                    ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-background/50 border-primary/10 hover:border-primary/30"
                }`}
                data-testid={`cert-${index}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${cert.featured ? "bg-primary animate-pulse" : "bg-primary/50"}`} />
                  <h4 className="font-semibold text-foreground leading-tight">{cert.name}</h4>
                </div>
                <div className="ml-6 space-y-2">
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
