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
  projects: Project[] = [this.p10, this.p11, this.p12, this.p13, this.p1, this.p2, this.p3, this.p4, this.p6];

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
