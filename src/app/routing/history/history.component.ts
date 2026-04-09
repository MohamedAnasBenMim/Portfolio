import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EducationsService } from "../../services/educations/educations.service";
import WorkExperience from "../../models/WorkExperience";
import { WorkExperiencesService } from "../../services/work-experience/work-experiences.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {
  ex2: WorkExperience = new WorkExperience(
    "Freelance Software Engineer",
    "BE CARTH.AI Consulting",
    "Computer Science",
    true,
    new Date("2026-03-01"),
    new Date("2026-03-01"),
    "France",
    [
      "As a Freelance Software Engineer at BE CARTH.AI Consulting, I contributed to the design and development of scalable SaaS solutions targeting small and medium-sized enterprises (SMEs), with a focus on automation, compliance, and intelligent systems.",
      "I designed and developed a compliant electronic invoicing system (e-Fatoora) aligned with Tunisian regulations. The system includes customizable invoice and quotation generation, QR code integration, digital signature support, and automated payment tracking and reminders.",
      "I also developed a multi-warehouse inventory management system, enabling real-time stock tracking, full traceability across multiple storage locations, and intelligent alert systems for automated restocking. The solution is accessible via web and mobile platforms, ensuring flexibility and operational efficiency.",
      "Additionally, I contributed to building high-performance web and mobile applications, improving business process automation for SMEs through scalable architectures and optimized user experiences.",
      "These projects strengthened my expertise in full-stack development, system design, and building production-ready solutions tailored to real-world business needs.",
      "Technologies: React, FastAPI, PostgreSQL, Flutter"
    ],
    ["a", "b"]
  );

  ex3: WorkExperience = new WorkExperience(
    "Co-Training Manager",
    "ECPC – ENSI Competitive Programming Club",
    "Computer Science",
    true,
    new Date("2025-09-01"),
    new Date("2025-09-01"),
    "France",
    [
      "Organized and led training sessions in competitive programming, covering algorithms, data structures, and problem-solving techniques.",
      "Designed structured learning paths and prepared problem sets to help members improve their coding and analytical skills.",
      "Mentored students through regular practice sessions and contests (e.g., ICPC-style), enhancing their performance in competitions.",
      "Fostered a collaborative learning environment and contributed to strengthening the club’s technical community.",
      "Technologies: C++, Python, Algorithms, Data Structures"
    ],
    ["a", "b"]
  );

  exMusic: WorkExperience = new WorkExperience(
    "Logistics Manager",
    "ENSI Music Club",
    "Computer Science",
    true,
    new Date("2025-09-01"),
    new Date("2025-09-01"),
    "France",
    [
      "Managed logistics and coordination for club events, rehearsals, and performances.",
      "Organized resources, schedules, and communication between members to ensure smooth execution of activities.",
      "Collaborated with different teams to support event planning, including technical setup and on-site coordination.",
      "Contributed to promoting cultural and artistic activities within the ENSI community.",
      "Skills: Organization, Event Management, Team Coordination"
    ],
    ["a", "b"]
  );

  ex4: WorkExperience = new WorkExperience(
    "Software Engineer Intern",
    "Zum-IT",
    "Computer Science",
    false,
    new Date("2025-06-01"),
    new Date("2025-08-01"),
    "France",
    [
      "As a Software Engineer Intern at Zum-IT, I contributed to the design and development of \"Zum-Portal\", a comprehensive HR management platform integrating client and project tracking, task coordination, event scheduling, leave management, and meeting room reservations.",
      "I designed and implemented key features aimed at centralizing operations and improving internal workflow management across the organization.",
      "I enhanced operational efficiency by optimizing workflows and automating core HR processes, significantly improving system usability and user experience.",
      "This experience strengthened my skills in full-stack development, system design, and building scalable enterprise applications in a collaborative on-site environment.",
      "Technologies: Angular, Django, PostgreSQL"
    ],
    ["a", "b"]
  );

  workExperiences: WorkExperience[] = [this.ex2, this.ex3, this.exMusic, this.ex4];

  constructor(private educationService: EducationsService, private workExperienceService: WorkExperiencesService) { }

  ngOnInit(): void {
    // this.workExperienceService.getWorkExperiences().subscribe(workExperiences => {
    //   this.workExperiences = workExperiences;
    // });
  }

  getResponsibilities(experience: WorkExperience): string {
    let responsibilities = "";
    for (let i = 0; i < experience.responsibilities.length; i++) {
      responsibilities += "• " + experience.responsibilities[i];
      responsibilities += "\n";
    }
    return responsibilities;
  }

}
