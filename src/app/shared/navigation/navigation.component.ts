import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import Project from "../../models/Project";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  p1 = new Project("E-Fatoora", "Electronic invoicing and commercial management SaaS for Tunisian small businesses.", "in progress", "FinTech", new Date("2026-01-01"), new Date("2026-03-01"), "https://github.com/MohamedAnasBenMim/Systeme-de-Facturation-electronique-e--Fatoora-pour-TPE-PME", "Client 1", ["FastAPI", "React", "PostgreSQL"], ["cosmicexperience1.png", "cosmicexperience2.png", "cosmicexperience3.png", "cosmicexperience4.png"]);
  p2 = new Project("Smart Stock System", "this is a SaaS platform that provides an intelligent stock management system for small and medium-sized businesses.", "in progress", "Stock Management", new Date("2026-03-01"), new Date("2026-03-01"), "https://github.com/MohamedAnasBenMim/Syst-me-Intelligent-de-Gestion-des-Stocks-avec-Application-Mobile", "Client 1", ["FastAPI", "React", "Flutter"], ["smartstock1.png", "smartstock2.png", "smartstock3.png", "smartstock4.png", "smartstock5.png", "smartstock6.png", "smartstock7.png"]);
  p3 = new Project("ZumPortal", "ZumPortal is a comprehensive HR management platform designed to streamline internal business operations and improve workforce organization.", "completed", "HR Management", new Date("2025-06-01"), new Date("2025-08-01"), "https://github.com/MohamedAnasBenMim/Zum-Portal", "Client 1", ["Angular", "Django", "PostgreSQL"], ["zum-portal-demo.mp4"]);
  p4 = new Project("Socially", "Socially is a modern and interactive social media platform designed to connect users and enable seamless content sharing and communication.", "completed", "Social Media", new Date("2025-11-01"), new Date("2025-11-30"), "https://github.com/MohamedAnasBenMim/Socially", "Client 1", ["Next.js", "React", "Prisma", "PostgreSQL"], ["socially1.png", "socially2.png", "socially3.png", "socially4.png"]);
  p6 = new Project("PROMPTPAY", "PromptPay is an innovative AI-powered e-commerce checkout platform designed to transform the traditional online purchasing experience.", "Completed", "FinTech", new Date("2025-12-01"), new Date("2025-12-20"), "https://github.com/MohamedAnasBenMim/Tunihack11.0", "Client 1", ["Next.js", "React", "TypeScript", "Groq AI", "Stripe API"], ["demo.mp4"]);
  p10 = new Project("CodeAtlas", "Architecture-aware codebase analyzer with dependency graphs, policy checks and change-impact reports.", "completed", "Software Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/CodeAtlas", "Portfolio", ["Python", "NetworkX", "Typer", "Pytest", "GitHub Actions"], ["codeatlas-cover.svg"]);
  p11 = new Project("FlowForge", "Durable distributed workflow engine with retries, idempotency and fault recovery.", "completed", "Backend Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/FlowForge", "Portfolio", ["FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Docker"], ["flowforge-cover.svg"]);
  p12 = new Project("SignalBoard", "Accessible real-time analytics workspace with streaming charts and a virtualized 100,000-row table.", "completed", "Frontend Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/SignalBoard", "Portfolio", ["React", "TypeScript", "Recharts", "Playwright", "Lighthouse"], ["signalboard-cover.svg"]);
  p13 = new Project("CollabDesk", "Multi-tenant collaboration SaaS with JWT authentication, RBAC, live workspaces and audit trails.", "completed", "Full-Stack Engineering", new Date("2026-11-01"), new Date("2026-11-09"), "https://github.com/MohamedAnasBenMim/CollabDesk", "Portfolio", ["Next.js", "NestJS", "Prisma", "PostgreSQL", "WebSockets"], ["collabdesk-cover.svg"]);
  p14 = new Project("AgentPilot", "Reliable tool-using AI agent runtime with typed contracts, approvals, recovery, and execution traces.", "completed", "AI Agent Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/AgentPilot", "Portfolio", ["Python", "Typed Tools", "Approvals", "Tracing"], ["agentpilot-cover.svg"]);
  p15 = new Project("ModelGuard", "Production fraud ML platform with model tracking, versioned serving, drift monitoring, and retraining workflows.", "completed", "Machine Learning Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ModelGuard", "Portfolio", ["Python", "FastAPI", "PR-AUC", "Drift Monitoring"], ["modelguard-cover.svg"]);
  p16 = new Project("InvoiceFlow", "Intelligent invoice extraction, validation, uncertainty handling, and human exception review.", "completed", "Applied AI", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/InvoiceFlow", "Portfolio", ["Python", "FastAPI", "Extraction", "Human Review"], ["invoiceflow-cover.svg"]);
  p17 = new Project("EvidenceAI", "Permission-aware hybrid RAG with reranking, grounded answers, citations, and systematic evaluation.", "completed", "LLM / RAG Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/EvidenceAI", "Portfolio", ["Python", "Hybrid RAG", "Reranking", "Citations"], ["evidenceai-cover.svg"]);
  p18 = new Project("StreamPulse", "Kafka-compatible streaming platform with schemas, DLQ recovery, warehouse models, and data quality.", "completed", "Data Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/StreamPulse", "Portfolio", ["Python", "Kafka", "Redpanda", "PostgreSQL"], ["streampulse-cover.svg"]);
  p19 = new Project("CloudBlueprint", "Secure AWS reference architecture with Terraform, private compute, managed data, monitoring, backups, and recovery.", "completed", "Cloud Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/CloudBlueprint", "Portfolio", ["Terraform", "AWS", "ECS", "RDS"], ["cloudblueprint-cover.svg"]);
  p20 = new Project("ReleaseRail", "GitOps delivery platform with CI gates, container scanning, Kubernetes health checks, and automatic rollback.", "completed", "DevOps", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ReleaseRail", "Portfolio", ["GitHub Actions", "Docker", "Kubernetes", "Trivy"], ["releaserail-cover.svg"]);
  p21 = new Project("ReliabilityLab", "SLO laboratory with correlated telemetry, error budgets, controlled failures, detection, and recovery measurement.", "completed", "Site Reliability Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/ReliabilityLab", "Portfolio", ["Prometheus", "Grafana", "Loki", "Tempo"], ["reliabilitylab-cover.svg"]);
  p22 = new Project("DevLaunch", "Self-service developer platform for golden-path services, isolated environments, status, ownership, and documentation.", "completed", "Platform Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/DevLaunch", "Portfolio", ["Python", "FastAPI", "Kubernetes", "Templates"], ["devlaunch-cover.svg"]);
  p23 = new Project("QuorumKV", "Three-node replicated key-value store with leader election, quorum writes, persistence, recovery, and partition safety.", "completed", "Distributed Systems", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/QuorumKV", "Portfolio", ["Python", "Consensus", "Replication", "Persistence"], ["quorumkv-cover.svg"]);
  p24 = new Project("InfraFoundry", "Automated Linux HA lab with Ansible, HAProxy failover, secure networking, backups, and verified restoration.", "completed", "Infrastructure Engineering", new Date("2026-11-10"), new Date("2026-11-10"), "https://github.com/MohamedAnasBenMim/InfraFoundry", "Portfolio", ["Ansible", "Linux", "HAProxy", "Backups"], ["infrafoundry-cover.svg"]);
  projects: Project[] = [this.p19, this.p20, this.p21, this.p22, this.p23, this.p24, this.p14, this.p15, this.p16, this.p17, this.p18, this.p10, this.p11, this.p12, this.p13, this.p1, this.p2, this.p3, this.p4, this.p6];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/navigation.custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  
  redirectTo(uri: string): void {
    window.location.href = uri;
  }
}
