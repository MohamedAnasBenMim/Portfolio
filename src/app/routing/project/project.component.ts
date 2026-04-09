import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
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
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p9 = new Project("3D Solar System", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  projects: Project[] = [this.p2, this.p1, this.p3, this.p4, this.p6, this.p9];

  project: Project | undefined;
  routeSub: any;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.projectService.getProjects().subscribe(projects => {
      //this.projects = projects;
      this.routeSub = this.route.params.subscribe(params => {
console.log( params['name'])
this.projects.forEach(project => {
          console.log(project)
          if (project.name === params['name']) {
            this.project = project;    

          }
        });
      });
  //  });
  }

  getProjectTechnologies(): string {
    console.log(this.project)
    let technologies = "";
    if (this.project) {
      for (let i = 0; i < this.project.technologies.length; i++) {
        technologies += this.project.technologies[i];

        if (this.project.technologies.length - 1 !== i) {
          technologies += ", ";
        }
      }
    }
console.log(this.project)
    return technologies;
  }

  getProject(): Project | undefined {
    return this.project;
  }

  getProjectPictures(): string[] | undefined {
    let links: string[] = [];
    this.project?.links.forEach(link => {
      //if (link === "Image") {
        links.push(link);
      //}
    });
    return links
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
