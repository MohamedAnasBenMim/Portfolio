import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Project from "../../models/Project";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  

  p1 = new Project("E-Fatoora", "this is a SaaS platform that provides electronic invoicing and commercial management solutions for small and medium-sized businesses in Tunisia. The system allows users to create and manage customizable invoices and quotations while ensuring compliance with the e-Fatoora regulation. It includes features such as automatic QR code generation, electronic signature integration, payment tracking, and automated reminders. The platform also offers dashboards and KPIs to help businesses monitor their financial performance and improve decision-making.", "in progress", "FinTech", new Date("2026-03-01"), new Date("2026-01-01"), "https://github.com/MohamedAnasBenMim/Systeme-de-Facturation-electronique-e--Fatoora-pour-TPE-PME", "Client 1", ["FastAPI", "React", "Flutter", "PostgreSQL", "SQLAlchemy", "Docker", "JWT", "Redis", "Git", "GitHub Actions"], ["cosmicexperience1.png", "cosmicexperience2.png", "cosmicexperience3.png", "cosmicexperience4.png"]);
  p2 = new Project("Smart Stock System", `this is a SaaS platform that provides an intelligent stock management system for small and medium-sized businesses. The system allows companies to manage inventory in real time across multiple warehouses, ensuring full traceability of products from entry to exit. It includes features such as automated stock updates, smart alerts for low stock and replenishment, and detailed tracking of movements.

The platform also offers a mobile application that enables users to monitor stock levels, scan products, and receive notifications anytime and anywhere. With integrated analytics and dashboards, businesses can optimize inventory management, reduce losses, and improve operational efficiency.`, "in progress", "Stock Management", new Date("2026-03-01"), new Date("2026-03-01"), "https://github.com/MohamedAnasBenMim/Syst-me-Intelligent-de-Gestion-des-Stocks-avec-Application-Mobile", "Client 1", ["FastAPI", "React", "Flutter", "PostgreSQL", "SQLAlchemy", "Docker", "Redis", "JWT", "Git", "GitHub Actions"], ["smartstock1.png", "smartstock2.png", "smartstock3.png", "smartstock4.png", "smartstock5.png", "smartstock6.png", "smartstock7.png"]);
  p3 = new Project("ZumPortal", `ZumPortal is a comprehensive HR management platform designed to streamline internal business operations and improve workforce organization. The system provides tools for managing employees, clients, and projects in a centralized environment, allowing companies to efficiently track ongoing activities and resources.

The platform includes features such as task management for organizing daily work, an integrated event calendar for scheduling important activities, and a personalized leave management system that simplifies vacation requests and approvals. Additionally, it offers meeting room reservation functionality to optimize workspace usage and avoid scheduling conflicts. ZumPortal aims to enhance productivity, improve communication, and simplify administrative processes within organizations.`, "completed", "HR Management", new Date("2025-06-01"), new Date("2025-08-01"), "https://github.com/MohamedAnasBenMim/Zum-Portal", "Client 1", ["Angular", "Django", "PostgreSQL"], ["zum-portal-demo.mp4"]);
  p4 = new Project("Socially", `Socially is a modern and interactive social media platform designed to connect users and enable seamless content sharing and communication. The platform allows users to create personalized profiles, publish posts, interact through comments and likes, and build their own network using a follower/following system. It focuses on delivering a smooth and engaging user experience with real-time interactions.

The application includes advanced features such as real-time notifications to keep users updated on activities, dynamic content feeds, and efficient data handling to ensure fast performance even with large user interactions. Built with a scalable architecture, Socially provides a responsive and intuitive interface, making it easy for users to navigate, engage, and stay connected within the platform.`, "completed", "Social Media", new Date("2025-11-01"), new Date("2025-11-30"), "https://github.com/MohamedAnasBenMim/Socially", "Client 1", ["Next.js", "React", "Prisma", "PostgreSQL"], ["socially1.png", "socially2.png", "socially3.png", "socially4.png"]);
  p6 = new Project("PROMPTPAY", `PromptPay is an innovative AI-powered e-commerce checkout platform designed to transform the traditional online purchasing experience by replacing complex checkout forms with natural conversational interactions. The platform enables users to communicate directly with an intelligent AI assistant to manage their shopping cart, add payment methods, and complete purchases through simple chat commands. It provides a seamless and intuitive buying journey where users can naturally express actions such as reviewing cart items, adding payment cards, and confirming purchases without navigating multiple forms or pages. The application integrates secure Stripe payment processing for real-time transactions and includes advanced security mechanisms such as encrypted password protection for payment confirmation. Built with a modern scalable architecture, PromptPay combines artificial intelligence, secure payment systems, and responsive UI design to deliver a fast, engaging, and user-friendly checkout experience for modern e-commerce applications.`, "Completed", "FinTech", new Date("2025-12-01"), new Date("2025-12-20"), "https://github.com/MohamedAnasBenMim/Tunihack11.0", "Client 1", ["Next.js", "React", "TypeScript", "Groq AI", "Stripe API"], ["demo.mp4"]);
  p10 = new Project("CodeAtlas", `CodeAtlas is an intelligent codebase analyzer that helps engineering teams understand, protect, and evolve the architecture of their software. It ships as a command-line tool and a GitHub integration that scan a repository, build a full dependency graph of its modules, and surface the structural problems that are hard to see in day-to-day code review.

The analyzer detects architectural violations such as forbidden layer dependencies and circular imports, and performs change-impact analysis to identify which modules are likely to be affected by a given change before it is merged. Results are available as Markdown or JSON reports and the repository includes a reusable Docker-based GitHub Action. Quality is backed by unit, integration, report, and performance tests.`, "completed", "Software Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/CodeAtlas", "Portfolio", ["Python", "Typer CLI", "AST Parsing", "NetworkX", "GitHub Actions", "Pytest", "Docker"], ["codeatlas-cover.svg"]);
  p11 = new Project("FlowForge", `FlowForge is a durable, distributed workflow execution engine built to run long-lived, multi-step business processes reliably at scale. Workflows are defined and triggered through REST APIs, then executed by a pool of background workers that pull tasks from Redis queues while every state transition is persisted in PostgreSQL.

The engine is designed around failure: it supports configurable retry policies with exponential backoff, database-enforced idempotency keys, and automatic recovery that resumes interrupted workflows after a worker crash. The repository includes integration tests, a Docker Compose environment, and a Locust benchmark for throughput and p95 latency.`, "completed", "Backend Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/FlowForge", "Portfolio", ["FastAPI", "Python", "PostgreSQL", "Redis", "SQLAlchemy", "Docker", "Locust", "Pytest", "GitHub Actions"], ["flowforge-cover.svg"]);
  p12 = new Project("SignalBoard", `SignalBoard is a real-time analytics workspace for exploring and monitoring live data. Built with React and TypeScript, it streams updates into the interface as they happen and lets users assemble their own views from customizable charts and widgets on a responsive layout that adapts from large monitors to mobile screens.

The dashboard handles 100,000 events with a virtualized table and remains fully keyboard accessible. Quality is enforced with unit tests, desktop and mobile Playwright scenarios, Lighthouse budgets, and a rendering-performance guard.`, "completed", "Frontend Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/SignalBoard", "Portfolio", ["React", "TypeScript", "WebSockets", "TanStack Virtual", "Recharts", "Playwright", "Lighthouse"], ["signalboard-cover.svg"]);
  p13 = new Project("CollabDesk", `CollabDesk is a complete multi-tenant SaaS collaboration platform where teams organize their work in shared workspaces. Each organization is fully isolated, with its own members, workspaces, and data, and access is controlled through role-based permissions (RBAC) that define exactly what owners, admins, members, and guests can see and do.

The platform includes JWT authentication, organization-scoped guards, collaborative workspaces with Socket.IO updates, and complete audit trails that record who changed what. A validated REST API powers a polished Next.js frontend, and Docker Compose provides a reproducible local deployment.`, "completed", "Full-Stack Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/CollabDesk", "Portfolio", ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "WebSockets", "JWT", "Docker"], ["collabdesk-cover.svg"]);
  p14 = new Project("AgentPilot", `AgentPilot is a reliable runtime for AI agents that need to use external tools without sacrificing control or observability. Every tool has a typed input contract and a risk classification, so malformed calls fail before execution and sensitive actions are paused behind an explicit approval decision.

The execution engine records structured traces for planning, approvals, tool calls, failures, retries, and terminal results. Transient connection and timeout failures are recovered with bounded retries, while a deterministic benchmark compares direct and plan-verify strategies across execution success, expected-outcome accuracy, p95 latency, and estimated cost.`, "completed", "AI Agent Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/AgentPilot", "Portfolio", ["Python", "Typed Tools", "Approval Gates", "Execution Traces", "Recovery Policies", "Pytest", "Docker", "GitHub Actions"], ["agentpilot-cover.svg"]);
  p15 = new Project("ModelGuard", `ModelGuard is a production-minded fraud detection platform that connects feature engineering, training, experiment comparison, versioned models, batch inference, and online FastAPI serving through one tested feature contract. This prevents training-serving skew and makes every prediction traceable to an exact model version.

The platform measures PR-AUC, confusion matrices, training time, p95 serving latency, and train-serving consistency. Population Stability Index monitoring detects input drift and provides a clear retraining trigger. On the reproducible synthetic benchmark, the model reaches 0.792 PR-AUC with sub-millisecond inference and zero measurable feature-contract divergence.`, "completed", "Machine Learning Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ModelGuard", "Portfolio", ["Python", "FastAPI", "Feature Engineering", "Model Registry", "PR-AUC", "Drift Monitoring", "Pytest", "Docker"], ["modelguard-cover.svg"]);
  p16 = new Project("InvoiceFlow", `InvoiceFlow is an intelligent document processing system that converts raw invoice text into validated business data. It extracts invoice number, supplier, date, total, and currency, normalizes regional formats, and keeps prediction confidence separate from deterministic validation rules.

Incomplete, invalid, or uncertain invoices are routed to a human review queue while high-confidence documents continue through straight-through processing. A controlled benchmark compares the enhanced pipeline with a baseline on field accuracy, processing time, and cost; the included labeled fixture set improves from 20% to 100% field accuracy.`, "completed", "Applied AI", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/InvoiceFlow", "Portfolio", ["Python", "FastAPI", "Document Extraction", "Business Validation", "Human Review", "Uncertainty", "Pytest", "Docker"], ["invoiceflow-cover.svg"]);
  p17 = new Project("EvidenceAI", `EvidenceAI is a permission-aware enterprise RAG system designed to answer questions only from evidence the current user is allowed to access. It combines BM25-style lexical retrieval with deterministic semantic similarity, applies metadata and group filters before retrieval, reranks results, and produces grounded answers with numbered citations.

When permitted evidence is insufficient, the system refuses safely instead of inventing an answer. Its evaluation suite measures retrieval recall@3, faithfulness, citation accuracy, latency, and estimated answer cost in one repeatable run. The included labeled evaluation reaches 100% recall, faithfulness, and citation accuracy.`, "completed", "LLM / RAG Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/EvidenceAI", "Portfolio", ["Python", "Hybrid Retrieval", "BM25", "Reranking", "Document Permissions", "Citations", "FastAPI", "RAG Evaluation"], ["evidenceai-cover.svg"]);
  p18 = new Project("StreamPulse", `StreamPulse is a Kafka-compatible streaming data platform that validates versioned event schemas, suppresses duplicates, applies deterministic transformations, and loads analytics-ready records into warehouse models. A thin consumer adapter uses manual offset commits while the core pipeline remains broker-independent and easy to test.

Malformed events are preserved in a dead-letter queue with failure reasons, retryable transformation failures can be replayed, and durable checkpoints restore processing state after a crash. The repository includes Redpanda and PostgreSQL in Docker Compose, daily SQL models, scheduled quality checks, and an isolated benchmark processing roughly 164,000 events per second.`, "completed", "Data Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/StreamPulse", "Portfolio", ["Python", "Kafka", "Redpanda", "PostgreSQL", "Schema Validation", "Dead-Letter Queue", "Data Quality", "Docker"], ["streampulse-cover.svg"]);
  p19 = new Project("CloudBlueprint", `CloudBlueprint is a secure, reproducible AWS reference environment expressed entirely in Terraform. It separates public, application, and database tiers across two availability zones, runs ECS Fargate tasks without public IP addresses, and limits traffic through purpose-built security groups.

The data layer uses encrypted Multi-AZ PostgreSQL, KMS key rotation, deletion protection, final snapshots, daily AWS Backup retention, CloudWatch alarms, and container insights. A documented recovery script restores a selected recovery point into an isolated environment before cutover. Terraform validation and five infrastructure policy tests run in CI without creating billable cloud resources.`, "completed", "Cloud Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/CloudBlueprint", "Portfolio", ["Terraform", "AWS", "ECS Fargate", "RDS PostgreSQL", "IAM", "CloudWatch", "AWS Backup", "GitHub Actions"], ["cloudblueprint-cover.svg"]);
  p20 = new Project("ReleaseRail", `ReleaseRail is an automated GitOps delivery reference that connects unit tests, immutable container builds, Trivy security scanning, Kubernetes manifests, health gates, desired-state reconciliation, and rollback. The deployment controller models every release transition and persists both the active revision and the intended state.

Its executable failure scenario promotes a stable release, submits an intentionally faulty version, detects the failed health gate, and automatically restores version 1.0.0. The controller is covered at 100%, while the production overlay adds non-root execution, a read-only filesystem, resource limits, and readiness and liveness probes.`, "completed", "DevOps", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ReleaseRail", "Portfolio", ["GitHub Actions", "Docker", "Kubernetes", "Kustomize", "Trivy", "Python", "GitOps", "Pytest"], ["releaserail-cover.svg"]);
  p21 = new Project("ReliabilityLab", `ReliabilityLab is an SLO-driven observability laboratory for evaluating availability, p95 latency, error-budget consumption, detection delay, and recovery under controlled failure injection. Trace IDs correlate spans with structured logs, while the included stack brings together Prometheus, Grafana, Loki, and Tempo.

The deterministic 1,000-request experiment injects a severe error and latency window, correctly exhausts the error budget, and marks the SLO non-compliant. It measures 300 ms alert detection and 1.95 s recovery, with 100% coverage across the SLO, telemetry, and chaos modules.`, "completed", "Site Reliability Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ReliabilityLab", "Portfolio", ["Python", "Prometheus", "Grafana", "Loki", "Tempo", "SLOs", "Chaos Engineering", "Docker Compose"], ["reliabilitylab-cover.svg"]);
  p22 = new Project("DevLaunch", `DevLaunch is a self-service internal developer platform that turns a validated service request into a documented, deployable golden path. It scaffolds application code, Docker and Kubernetes assets, ownership metadata, health checks, and documentation while planning an isolated namespace with default-deny networking intent.

A persistent service catalog exposes owner, repository, documentation, environment, and health status through a CLI and FastAPI adapter. The reproducible 25-service benchmark records 1.45 ms p95 local onboarding and the core platform reaches 97.65% test coverage, with explicit collision protection and no silent infrastructure application.`, "completed", "Platform Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/DevLaunch", "Portfolio", ["Python", "FastAPI", "Kubernetes", "Docker", "Service Catalog", "Golden Paths", "Templates", "Pytest"], ["devlaunch-cover.svg"]);
  p23 = new Project("QuorumKV", `QuorumKV is an educational three-node distributed key-value store that implements majority leader election, ordered log replication, quorum-acknowledged writes, atomic JSON persistence, crash recovery, and network-partition testing. Minority writes are rejected before they can enter committed state.

The majority side can elect a new leader and continue serving writes, while healing synchronizes the committed log to recovered followers. The local benchmark commits 500 writes at roughly 335 writes per second, recovers leadership in 2.19 ms, verifies post-recovery consistency, and maintains 92.67% test coverage.`, "completed", "Distributed Systems", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/QuorumKV", "Portfolio", ["Python", "Leader Election", "Log Replication", "Quorum", "Persistence", "Network Partitions", "Recovery", "Pytest"], ["quorumkv-cover.svg"]);
  p24 = new Project("InfraFoundry", `InfraFoundry is an automated high-availability Linux laboratory combining Ansible configuration, secure networking, HAProxy health-based failover, serial application updates, monitoring-ready services, daily backups, and disaster-recovery procedures. The baseline role adds firewalling, fail2ban, time synchronization, and SSH hardening.

Its executable HA model takes the active application node offline, routes service to the backup node, creates a SHA-256-protected archive, and verifies the checksum before restoration. Five tests cover failover and tamper rejection with 100% coverage; the README clearly separates fast local simulation metrics from recovery times that must be measured on real VMs.`, "completed", "Infrastructure Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/InfraFoundry", "Portfolio", ["Ansible", "Linux", "HAProxy", "UFW", "Fail2ban", "Backups", "Disaster Recovery", "Pytest"], ["infrafoundry-cover.svg"]);
  projects: Project[] = [this.p19, this.p20, this.p21, this.p22, this.p23, this.p24, this.p14, this.p15, this.p16, this.p17, this.p18, this.p10, this.p11, this.p12, this.p13, this.p2, this.p1, this.p3, this.p4, this.p6];

  project: Project | undefined;
  routeSub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.project = this.projects.find(project => project.name === params['name']);
    });
  }

  getProjectTechnologies(): string {
    return this.project?.technologies.join(', ') || '';
  }

  getProject(): Project | undefined {
    return this.project;
  }

  getProjectPictures(): string[] | undefined {
    return this.project?.links || [];
  }

  getProjectLinks(): string[] {
    let links: string[] = [];
    this.project?.links.forEach(link => {
      // if (link == "Image") {
        links.push(link);
      // }
    });
    return links;
  }

  isVideoFile(fileName: string): boolean {
    const lower = fileName.toLowerCase();
    return lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.mov');
  }

  getProjectGithubLabel(): string {
    if (this.project?.name === "E-Fatoora") {
      return "E-Fatoora System";
    }

    if (this.project?.name === "Smart Stock System") {
      return "SmartStockSystem";
    }

    if (this.project?.name === "ZumPortal") {
      return "ZumPortal";
    }

    if (this.project?.name === "Socially") {
      return "Socially";
    }

    if (this.project?.name === "PROMPTPAY") {
      return "PromptPay";
    }

    const fallback = this.project?.name || "Repository";
    const location = this.project?.location;
    if (!location) {
      return fallback;
    }

    const parts = location.split('/').filter(Boolean);
    const repoName = parts[parts.length - 1];
    return repoName || fallback;
  }
}
