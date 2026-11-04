import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
import Project from "../../models/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  p1 = new Project("E-Fatoora", "this is a website that provides information on upcoming astronomical events such as comet appearances,eclipses, and more. The site offers a calendar of events, as well as detailed descriptions and viewing tips for each event. Users can also sign up for email notifications of upcoming events, and can even create their personalized calendar of events", "completed", "Category 1", new Date(), new Date(), "https://github.com/MohamedAnasBenMim/Systeme-de-Facturation-electronique-e--Fatoora-pour-TPE-PME", "Client 1", ["Tech 1", "Tech 2"], ["cosmicexperience1.png", "cosmicexperience2.png", "cosmicexperience3.png", "cosmicexperience4.png"]);
  p2 = new Project("Smart Stock System", "this is a SaaS platform that provides an intelligent stock management system for small and medium-sized businesses.", "in progress", "Stock Management", new Date("2026-03-01"), new Date("2026-03-01"), "https://github.com/MohamedAnasBenMim/Syst-me-Intelligent-de-Gestion-des-Stocks-avec-Application-Mobile", "Client 1", ["FastAPI", "React", "Flutter"], ["smartstock1.png", "smartstock2.png", "smartstock3.png", "smartstock4.png", "smartstock5.png", "smartstock6.png", "smartstock7.png"]);
  p3 = new Project("ZumPortal", "ZumPortal is a comprehensive HR management platform designed to streamline internal business operations and improve workforce organization.", "completed", "HR Management", new Date("2025-06-01"), new Date("2025-08-01"), "https://github.com/MohamedAnasBenMim/Zum-Portal", "Client 1", ["Angular", "Django", "PostgreSQL"], ["zum-portal-demo.mp4"]);
  p4 = new Project("Socially", "Socially is a modern and interactive social media platform designed to connect users and enable seamless content sharing and communication.", "completed", "Social Media", new Date("2025-11-01"), new Date("2025-11-30"), "https://github.com/MohamedAnasBenMim/Socially", "Client 1", ["Next.js", "React", "Prisma", "PostgreSQL"], ["socially1.png", "socially2.png", "socially3.png", "socially4.png"]);
  p6 = new Project("PROMPTPAY", "PromptPay is an innovative AI-powered e-commerce checkout platform designed to transform the traditional online purchasing experience.", "Completed", "FinTech", new Date("2025-12-01"), new Date("2025-12-20"), "https://github.com/MohamedAnasBenMim/Tunihack11.0", "Client 1", ["Next.js", "React", "TypeScript", "Groq AI", "Stripe API"], ["demo.mp4"]);
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p9 = new Project("3D Solar System", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p10 = new Project("CodeAtlas", "Intelligent codebase analyzer: CLI and GitHub integration for dependency analysis, architectural violations and change-impact reports.", "in progress", "Software Engineering", new Date("2026-11-01"), new Date("2026-11-01"), "", "Client 1", ["Python", "GitHub Actions"], ["codeatlas-cover.svg"]);
  p11 = new Project("FlowForge", "Durable distributed workflow execution engine with retries, idempotency and fault recovery.", "in progress", "Backend Engineering", new Date("2026-11-01"), new Date("2026-11-01"), "", "Client 1", ["FastAPI", "PostgreSQL", "Redis"], ["flowforge-cover.svg"]);
  p12 = new Project("SignalBoard", "Real-time analytics workspace with streaming charts and virtualized data tables.", "in progress", "Frontend Engineering", new Date("2026-11-01"), new Date("2026-11-01"), "", "Client 1", ["React", "TypeScript"], ["signalboard-cover.svg"]);
  p13 = new Project("CollabDesk", "Multi-tenant SaaS collaboration platform with RBAC, real-time workspaces and audit trails.", "in progress", "Full-Stack Engineering", new Date("2026-11-01"), new Date("2026-11-01"), "", "Client 1", ["Next.js", "NestJS", "PostgreSQL"], ["collabdesk-cover.svg"]);
  projects: Project[] = [this.p1, this.p2, this.p3, this.p4, this.p6, this.p10, this.p11, this.p12, this.p13];

  constructor(private projectService: ProjectsService, private elementRef:ElementRef, private router: Router) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/navigation.custom.js";
    this.elementRef.nativeElement.appendChild(s);

    // this.projectService.getProjects().subscribe(projects => {
    //   this.projects = projects;
    // })
  }
  
  redirectTo(uri:string){
    window.location.href=uri
  }
}
