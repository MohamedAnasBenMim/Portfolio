import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  readonly featuredProjects: FeaturedProject[] = [
    {
      name: 'CodeAtlas',
      role: 'Software Engineering',
      summary: 'Architecture-aware code analysis with dependency graphs, policy checks, and transitive change-impact reports.',
      cover: 'codeatlas-cover.svg',
      technologies: ['Python', 'NetworkX', 'Typer', 'Pytest'],
      proof: '5 tests · 80% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/CodeAtlas',
      accent: 'teal'
    },
    {
      name: 'FlowForge',
      role: 'Backend Engineering',
      summary: 'A durable workflow engine designed around retries, idempotency, persisted state, and worker recovery.',
      cover: 'flowforge-cover.svg',
      technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      proof: '6 tests · 83% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/FlowForge',
      accent: 'amber'
    },
    {
      name: 'SignalBoard',
      role: 'Frontend Engineering',
      summary: 'An accessible live analytics workspace with streaming charts and a virtualized 100,000-row event table.',
      cover: 'signalboard-cover.svg',
      technologies: ['React', 'TypeScript', 'Recharts', 'Playwright'],
      proof: '100k rows · Lighthouse CI',
      repository: 'https://github.com/MohamedAnasBenMim/SignalBoard',
      accent: 'blue'
    },
    {
      name: 'CollabDesk',
      role: 'Full-Stack Engineering',
      summary: 'A multi-tenant collaboration SaaS with JWT authentication, organization RBAC, live updates, and audit trails.',
      cover: 'collabdesk-cover.svg',
      technologies: ['Next.js', 'NestJS', 'Prisma', 'WebSockets'],
      proof: 'RBAC tested · CI verified',
      repository: 'https://github.com/MohamedAnasBenMim/CollabDesk',
      accent: 'violet'
    }
  ];

  readonly aiDataProjects: FeaturedProject[] = [
    {
      name: 'AgentPilot',
      role: 'AI Agent Engineering',
      summary: 'A reliable tool-using agent runtime with typed contracts, approval gates, failure recovery, and structured execution traces.',
      cover: 'agentpilot-cover.svg',
      technologies: ['Python', 'Typed Tools', 'Approvals', 'Tracing'],
      proof: '5 tests · 93% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/AgentPilot',
      accent: 'cyan'
    },
    {
      name: 'ModelGuard',
      role: 'Machine Learning Engineering',
      summary: 'An end-to-end fraud ML platform covering feature contracts, experiment tracking, versioned serving, drift, and retraining.',
      cover: 'modelguard-cover.svg',
      technologies: ['Python', 'FastAPI', 'PR-AUC', 'Drift'],
      proof: '0.792 PR-AUC · 97% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/ModelGuard',
      accent: 'green'
    },
    {
      name: 'InvoiceFlow',
      role: 'Applied AI',
      summary: 'An intelligent invoice pipeline with structured extraction, validation, uncertainty handling, and human exception review.',
      cover: 'invoiceflow-cover.svg',
      technologies: ['Python', 'FastAPI', 'Extraction', 'Human Review'],
      proof: '100% field accuracy · 98% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/InvoiceFlow',
      accent: 'rose'
    },
    {
      name: 'EvidenceAI',
      role: 'LLM / RAG Engineering',
      summary: 'Permission-aware hybrid retrieval with reranking, metadata filters, grounded answers, citations, and systematic evaluation.',
      cover: 'evidenceai-cover.svg',
      technologies: ['Hybrid RAG', 'Reranking', 'Citations', 'FastAPI'],
      proof: '100% recall@3 · 100% citations',
      repository: 'https://github.com/MohamedAnasBenMim/EvidenceAI',
      accent: 'indigo'
    },
    {
      name: 'StreamPulse',
      role: 'Data Engineering',
      summary: 'A Kafka-compatible streaming platform with schema validation, idempotent transforms, DLQ recovery, and warehouse models.',
      cover: 'streampulse-cover.svg',
      technologies: ['Kafka', 'Redpanda', 'PostgreSQL', 'Data Quality'],
      proof: '164k events/s · 96% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/StreamPulse',
      accent: 'orange'
    }
  ];

  readonly cloudPlatformProjects: FeaturedProject[] = [
    {
      name: 'CloudBlueprint',
      role: 'Cloud Engineering',
      summary: 'A secure AWS reference architecture with segmented networking, private compute, managed data, monitoring, backups, and recovery.',
      cover: 'cloudblueprint-cover.svg',
      technologies: ['Terraform', 'AWS', 'ECS', 'RDS'],
      proof: '5 tests · Terraform validated',
      repository: 'https://github.com/MohamedAnasBenMim/CloudBlueprint',
      accent: 'sky'
    },
    {
      name: 'ReleaseRail',
      role: 'DevOps',
      summary: 'A GitOps delivery reference with CI gates, container scanning, Kubernetes health checks, desired-state sync, and automatic rollback.',
      cover: 'releaserail-cover.svg',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Trivy'],
      proof: '5 tests · 100% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/ReleaseRail',
      accent: 'lime'
    },
    {
      name: 'ReliabilityLab',
      role: 'Site Reliability Engineering',
      summary: 'An SLO laboratory that correlates metrics, traces, and logs while measuring error budgets, detection delay, and recovery under faults.',
      cover: 'reliabilitylab-cover.svg',
      technologies: ['Prometheus', 'Grafana', 'Tempo', 'Loki'],
      proof: '300ms detect · 1.95s recover',
      repository: 'https://github.com/MohamedAnasBenMim/ReliabilityLab',
      accent: 'red'
    },
    {
      name: 'DevLaunch',
      role: 'Platform Engineering',
      summary: 'A self-service developer platform that scaffolds golden-path services, isolated environments, ownership, documentation, and catalog status.',
      cover: 'devlaunch-cover.svg',
      technologies: ['Python', 'FastAPI', 'Kubernetes', 'Templates'],
      proof: '1.45ms p95 · 98% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/DevLaunch',
      accent: 'yellow'
    },
    {
      name: 'QuorumKV',
      role: 'Distributed Systems',
      summary: 'A durable three-node key-value store with leader election, quorum commits, replicated logs, crash recovery, and partition testing.',
      cover: 'quorumkv-cover.svg',
      technologies: ['Python', 'Consensus', 'Replication', 'Persistence'],
      proof: '335 writes/s · 93% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/QuorumKV',
      accent: 'purple'
    },
    {
      name: 'InfraFoundry',
      role: 'Infrastructure Engineering',
      summary: 'An automated Linux HA lab with Ansible hardening, HAProxy failover, health checks, checksum backups, and verified disaster recovery.',
      cover: 'infrafoundry-cover.svg',
      technologies: ['Ansible', 'Linux', 'HAProxy', 'Backups'],
      proof: '5 tests · 100% coverage',
      repository: 'https://github.com/MohamedAnasBenMim/InfraFoundry',
      accent: 'slate'
    }
  ];

  readonly visionResearchProjects: FeaturedProject[] = [
    {
      name: 'VisionInspect',
      role: 'Computer Vision',
      summary: 'An industrial defect inspection pipeline with synthetic data preparation, pixel segmentation, calibrated evaluation, ONNX inference, and a review dashboard.',
      cover: 'visioninspect-cover.svg',
      technologies: ['PyTorch', 'OpenCV', 'ONNX Runtime', 'FastAPI'],
      proof: '0.998 pixel AUROC · 0.10ms ONNX',
      repository: 'https://github.com/MohamedAnasBenMim/VisionInspect',
      accent: 'magenta'
    },
    {
      name: 'SmartWave Research',
      role: 'Research Engineering',
      summary: 'A reproducible RIS optimization study comparing random search, alternating optimization, and a low-latency reinforcement-learning policy under channel shift.',
      cover: 'smartwave-research-cover.svg',
      technologies: ['PyTorch', 'NumPy', 'SciPy', 'MLflow'],
      proof: '12 seeds · 11.18 bit/s/Hz',
      repository: 'https://github.com/MohamedAnasBenMim/SmartWave-Research',
      accent: 'electric'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCards(): Card[] {
    return [{
      title: 'Algorithms Enthusiast',
      description:"My passion for computer science and coding is deeply rooted in my mathematical background. The logical and analytical thinking skills I acquired through my studies in maths have proven to be invaluable in the field of computer science. They allow me to approach problem-solving with a clear and structured mindset, making it easier for me to find creative solutions to even the most complex challenges. My deep understanding of algorithms & data structures, has also been crucial in writing efficient and effective code. The challenge and satisfaction of solving complex problems through coding is something that I find particularly exciting and motivating, that's why I am passionate about Computer Science, it blends my love for mathematics and problem-solving with the thrill of bringing ideas to life through code."
    }, {
      title: 'Astronomy Lover',
      description:'My deep-seated interest for astronomy and space, combined with my background in software engineering, has led me to envision a future in which I can use my knowledge to push the boundaries of what is possible in this field. My understanding of programming and data analysis can be used to process and interpret large amounts of data from astronomical observations, helping to uncover new discoveries and insights. I am excited about the possibility of using my background to develop new technologies and tools for space exploration. I want to be part of a team that uses technology to advance our knowledge and understanding of the universe. The potential of technology to help us explore the unknown and discover the mysteries of the cosmos is what drives my passion for astronomy and my desire to bring my software engineering background to the field'
    }, {
      title: 'Guitar Player 🎸',
      description:'The guitar is my passion. Its rich, expressive sound speaks to my soul and reflects my emotions. Playing the guitar is both challenging and rewarding, as I constantly push myself to improve and master new techniques. The versatility of the guitar, its ability to handle both rhythm and melody, inspires me to explore different styles of music and grow as a musician. The guitar is more than just an instrument—it’s a way for me to express myself and connect with others through the power of music.'
    }];
  }


}

interface Card {
  title: string;
  description: string;
}

interface FeaturedProject {
  name: string;
  role: string;
  summary: string;
  cover: string;
  technologies: string[];
  proof: string;
  repository: string;
  accent: 'teal' | 'amber' | 'blue' | 'violet' | 'cyan' | 'green' | 'rose' | 'indigo' | 'orange' | 'sky' | 'lime' | 'red' | 'yellow' | 'purple' | 'slate' | 'magenta' | 'electric';
}
