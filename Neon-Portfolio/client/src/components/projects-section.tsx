import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, BarChart3, Brain, BookOpen, Award } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Clinical Profile and Drug Therapy of Various Liver Diseases",
    subtitle: "Prospective Observational Study",
    description:
      "6-month clinical research study analyzing liver disease patterns and drug therapy outcomes in a 150-patient cohort. Published as first author in a Scopus-indexed international journal.",
    icon: FileText,
    isPublished: true,
    publication: {
      journal: "Journal of Population Therapeutics and Clinical Pharmacology (JPTCP)",
      volume: "Vol. 31, No. 10, 2024",
      pages: "Pages 796-802",
      date: "October 16, 2024",
      issn: "ISSN: 2561-8741",
      doi: "10.53555/g06aa848",
      indexing: ["Scopus", "Clarivate Web of Science", "EMBASE", "Elsevier"],
    },
    keyFindings: [
      "DCLD 65.3%, CLD 14%, Alcoholic Liver Disease 11%",
      "Portal hypertension 47%, Ascites 16.5%, Anemia 88.3%",
      "Drug therapy: Cefotaxime 41.5%, Pantoprazole 48%, Ursodeoxycholic acid 41%",
    ],
    technologies: ["Clinical Research", "Statistical Analysis", "SPSS", "Data Collection", "Hepatology"],
    gradient: "from-primary/20 to-primary/5",
    doiLink: "https://doi.org/10.53555/g06aa848",
  },
  {
    id: 2,
    title: "Pharmacokinetic Study: Disease Patterns and Drug Interactions with Prasugrel",
    subtitle: "Prospective Observational Clinical Research",
    description:
      "International publication analyzing Prasugrel drug interactions in 110 patients (ages 55-75). Identified significant drug interactions affecting therapeutic efficacy and safety profiles.",
    icon: BookOpen,
    isPublished: true,
    publication: {
      journal: "International Journal of Clinical Pharmacokinetics and Medical Sciences (IJCPMS)",
      volume: "Vol. 4(1), 2024",
      doi: "10.26452/ijcpms.v4i1.575",
    },
    keyFindings: [
      "Prasugrel interactions in 28.63% of patients",
      "Most common: Pantoprazole 16.91%, Aspirin 17.21%, Omeprazole 15.21%",
      "Severity distribution: 11.05% severe, 53.81% moderate, 34.13% mild",
    ],
    technologies: ["Research Methodology", "Pharmacokinetic Analysis", "Clinical Data Management"],
    gradient: "from-blue-500/20 to-blue-500/5",
    doiLink: "https://doi.org/10.26452/ijcpms.v4i1.575",
  },
  {
    id: 3,
    title: "Medical & Healthcare AI Projects",
    subtitle: "AI Drug Interaction Prediction & Pharmacovigilance Dashboard",
    description:
      "Machine learning projects for healthcare: (1) AI model predicting adverse drug events from 10,000+ records with 87% accuracy using scikit-learn. (2) Interactive SQL-based dashboard for real-time adverse reaction monitoring.",
    icon: Brain,
    isPublished: false,
    highlights: [
      "AI Drug Interaction: 10,000+ records, 87% prediction accuracy",
      "Pharmacovigilance Dashboard: Real-time ADR monitoring",
      "Technologies: Python, SQL, Matplotlib, Plotly, Scikit-learn",
    ],
    technologies: ["Python", "Scikit-learn", "SQL", "Matplotlib", "Plotly", "Machine Learning"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    github: "https://github.com/likhithc98-commits",
    repos: [
      { name: "AI-Drug-Interaction-Prediction", url: "https://github.com/likhithc98-commits/AI-Drug-Interaction-Prediction" },
      { name: "Pharmacovigilance-Dashboard", url: "https://github.com/likhithc98-commits/Pharmacovigilance-Dashboard" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 bg-card/30"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Research & <span className="text-gradient-neon">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research and innovative AI solutions bridging pharmacy and technology
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="glass-card glass-card-hover group overflow-visible transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.isPublished && (
                            <Badge className="bg-primary text-primary-foreground border-0">
                              <Award className="w-3 h-3 mr-1" />
                              International Publication
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.publication && (
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20 space-y-2">
                        <p className="font-semibold text-foreground">{project.publication.journal}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span>{project.publication.volume}</span>
                          {project.publication.pages && <span>{project.publication.pages}</span>}
                          {project.publication.date && <span>{project.publication.date}</span>}
                        </div>
                        {project.publication.issn && (
                          <p className="text-sm text-muted-foreground">{project.publication.issn}</p>
                        )}
                        <p className="text-sm">
                          <span className="text-muted-foreground">DOI: </span>
                          <a
                            href={project.doiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {project.publication.doi}
                          </a>
                        </p>
                        {project.publication.indexing && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.publication.indexing.map((index) => (
                              <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                                {index}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {project.keyFindings && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">Key Findings:</p>
                        {project.keyFindings.map((finding, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {finding}
                          </div>
                        ))}
                      </div>
                    )}

                    {project.highlights && (
                      <div className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-primary/10">
                      {project.doiLink && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-muted-foreground hover:text-primary"
                        >
                          <a
                            href={project.doiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-project-${project.id}-doi`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Publication
                          </a>
                        </Button>
                      )}
                      {project.repos && project.repos.map((repo) => (
                        <Button
                          key={repo.name}
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-muted-foreground hover:text-primary"
                        >
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-project-${project.id}-github-${repo.name}`}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {repo.name}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
