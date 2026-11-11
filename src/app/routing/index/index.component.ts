import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit, AfterViewInit, OnDestroy {

  activeProjectArea: ProjectArea = 'all';
  private revealObserver?: IntersectionObserver;
  private scrollbarInstance: any;
  private scrollbarListener?: (status: any) => void;
  private scrollbarRetry?: number;

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

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.prepareRevealAnimations();
    this.connectScrollFrame();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    if (this.scrollbarRetry) {
      window.clearTimeout(this.scrollbarRetry);
    }
    if (this.scrollbarInstance && this.scrollbarListener) {
      this.scrollbarInstance.removeListener(this.scrollbarListener);
    }
  }

  get projectAreas(): ProjectAreaOption[] {
    return [
      {id: 'all', label: 'All work', count: this.totalFeaturedProjects, icon: 'fa-layer-group'},
      {id: 'software', label: 'Software', count: this.featuredProjects.length, icon: 'fa-code'},
      {id: 'ai', label: 'AI & Data', count: this.aiDataProjects.length, icon: 'fa-brain'},
      {id: 'cloud', label: 'Cloud & Systems', count: this.cloudPlatformProjects.length, icon: 'fa-cloud'},
      {id: 'research', label: 'Vision & Research', count: this.visionResearchProjects.length, icon: 'fa-flask'}
    ];
  }

  get totalFeaturedProjects(): number {
    return this.featuredProjects.length + this.aiDataProjects.length +
      this.cloudPlatformProjects.length + this.visionResearchProjects.length;
  }

  get activeProjectLabel(): string {
    return this.projectAreas.find(area => area.id === this.activeProjectArea)?.label || 'All work';
  }

  get activeProjectCount(): number {
    return this.projectAreas.find(area => area.id === this.activeProjectArea)?.count || this.totalFeaturedProjects;
  }

  setProjectArea(area: ProjectArea): void {
    this.activeProjectArea = area;
    window.setTimeout(() => this.observeVisibleElements(), 0);
  }

  showArea(area: Exclude<ProjectArea, 'all'>): boolean {
    return this.activeProjectArea === 'all' || this.activeProjectArea === area;
  }

  scrollToProjects(): void {
    this.scrollToElement('project-showcase');
  }

  scrollToTop(): void {
    if (this.scrollbarInstance) {
      this.scrollbarInstance.scrollTo(0, 0, 700);
      return;
    }
    document.getElementById('scrollbar')?.scrollTo({top: 0, behavior: 'smooth'});
  }

  private scrollToElement(id: string): void {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    if (this.scrollbarInstance) {
      this.scrollbarInstance.scrollIntoView(target, {offsetTop: -20});
      return;
    }
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  private connectScrollFrame(attempt = 0): void {
    const container = document.getElementById('scrollbar');
    const scrollbarApi = (window as any).Scrollbar;
    this.scrollbarInstance = container && scrollbarApi ? scrollbarApi.get(container) : undefined;
    if (!this.scrollbarInstance && attempt < 15) {
      this.scrollbarRetry = window.setTimeout(() => this.connectScrollFrame(attempt + 1), 200);
      return;
    }
    if (!this.scrollbarInstance) {
      return;
    }
    this.scrollbarListener = (status: any) => {
      const progress = status.limit.y > 0 ? status.offset.y / status.limit.y : 0;
      const progressBar = this.elementRef.nativeElement.querySelector<HTMLElement>('#portfolio-progress-bar');
      const backToTop = this.elementRef.nativeElement.querySelector<HTMLElement>('.portfolio-back-to-top');
      progressBar?.style.setProperty('width', `${Math.min(progress * 100, 100)}%`);
      backToTop?.classList.toggle('is-visible', status.offset.y > 650);
    };
    this.scrollbarInstance.addListener(this.scrollbarListener);
  }

  private prepareRevealAnimations(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = this.elementRef.nativeElement.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach(target => target.classList.add('is-visible'));
      return;
    }
    targets.forEach(target => target.classList.add('reveal-ready'));
    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, {root: document.getElementById('scrollbar'), threshold: 0.08, rootMargin: '0px 0px -45px'});
    this.observeVisibleElements();
  }

  private observeVisibleElements(): void {
    if (!this.revealObserver) {
      return;
    }
    this.elementRef.nativeElement.querySelectorAll<HTMLElement>('.reveal-on-scroll:not(.is-visible)')
      .forEach(target => this.revealObserver?.observe(target));
  }

  getCards(): Card[] {
    return [{
      title: 'Systems Thinker',
      description:'My mathematical background shapes how I approach engineering: break complex problems into clear models, understand the trade-offs, and build solutions whose behavior can be explained and tested.'
    }, {
      title: 'Research Mindset',
      description:'Astronomy keeps me curious about difficult questions and large datasets. I bring that same mindset to software: form a hypothesis, measure the result, document the limits, and improve from evidence.'
    }, {
      title: 'Creative Discipline',
      description:'Playing guitar is my reminder that strong results come from iteration, patience, and attention to detail. It balances analytical work with creativity and continuous practice.'
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

type ProjectArea = 'all' | 'software' | 'ai' | 'cloud' | 'research';

interface ProjectAreaOption {
  id: ProjectArea;
  label: string;
  count: number;
  icon: string;
}
