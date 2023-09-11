import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EducationsService } from "../../services/educations/educations.service";
import Education from "../../models/Education";
import WorkExperience from "../../models/WorkExperience";
import { WorkExperiencesService } from "../../services/work-experience/work-experiences.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {
  ed1: Education = new Education(
    "CONFLEDIS PARIS",
    "Software Engineer Intern",
    "Computer Science",
    false,
    new Date("2022-05-01"),
    new Date("2022-07-01"),
    "France",
    [
      "Modeling (UML) and implementing a resilient serverless E-tourism website",
      "Adopting Micro Frontends architecture and integrating Nx monoRepo",
      "Employing AWS services: Cognito, DynamoDB, AppSync & Amplify.",
      "Technologies : React typescript, Aws "
    ],
    [
      "a",
      "b"
    ]

  );
  ed2: Education = new Education(
    "BH BANK & ASSURACE TUNIS",
    "Software Engineer Intern",
    "Computer Science",
    false,
    new Date("2022-11-01"),
    new Date("2023-06-01"),
    "France",
    [`As a part-time employee at BH Assurance, I worked on the Ahmini Project, a large initiative with both philanthropic and business aims. The project aimed to secure & support rural women who were working in difficult conditions by providing them with resources and assistance in case of emergency.`,

    `  My role on the project involved working on the development of the admin dashboard and mobile app for the initiative. This included gathering requirements and specifications from stakeholders, designing and implementing features, and testing and debugging the application.`,
      
    ` The project was challenging but also rewarding as it was fulfilling to be able to contribute to a project that had such a positive impact on the lives of rural women.
      `,
    "  Technologies : React typescript, Redux, nestJs , TypeOrm , etc."
    ],
    [
      "a",
      "b"
    ]

  );
  ed3: Education = new Education(
    "Tickie Paris",
    "Software Engineer Intern",
    "Station F paris",
    true,
    new Date("2023-06-01"),
    new Date("2022-07-01"),

    "France",
    [`Designed Tickie's software subscription module architecture, developing the subscription solution's business logic using
    Next and Nest.js technologies. Executed a comprehensive suite of robust unit and end-to-end tests.
    `,
    "  Technologies : NextJs, Redux,  NestJs , Primsa , etc."
    ],
    [
      "a",
      "b"
    ]

  );

  ex1: WorkExperience = new WorkExperience(
    "Software Engineer Intern",
    "TALAN TUNIS",
    "Computer Science",
    false,
    new Date("2022-05-01"),
    new Date("2022-07-01"),
    "France",
    [
      "Collaborating with a team to architect a blockchain solution for a metaverse project.",
      " creating a ticketing system DAO (Decentralized Autonomous Organization) and an NFT marketplace on POLYGON Technology",
      " Technologies : Nextjs, Solidity, Truffle, Web3.js, Metamask, Polygon, Ganache, Remix, Etherscan, etc."
    ],
    [
      "a",
      "b"
    ]

  );

  ex2: WorkExperience = new WorkExperience(
    "CO-LEADER & Software Engineer ",
    "TUNISIAN SPACE ASSOCIATION ",
    "Computer Science",
    true,
    new Date("2022-05-01"),
    new Date("2022-07-01"),
    "France",
    [
      "Setting up a secure & robust authentication system for the entire Tunsa platform based on JWT. ",
      "Developing and deploying the TICAD 8 event website for the JAXA (Japan Aerospace Exploration Agency).",
      "Technologies : React js &  Express JS"
    ],
    [
      "a",
      "b"
    ]

  );
  ex3: WorkExperience = new WorkExperience(
    "Software Engineer Intern",
    "PROXYM-IT SOUSSE",
    "Computer Science",
    false,
    new Date("2021-06-01"),
    new Date("2021-07-01"),
    "France",
    [
      "Building a secure, responsive website that offers a one-step solution to evaluate different dimensions of Proxym-it employee job satisfaction, as well as their overall engagement through a survey.The website provides also an admin dashboard containing statistics, interpretations and anticipations.",
      "Technologies : React js &  Express JS"
 
    ],
    [
      "a",
      "b"
    ]

  );




  educations: Education[] = [this.ed3,this.ed2, this.ed1 ];
  workExperiences: WorkExperience[] = [ this.ex1, this.ex2, this.ex3];

  constructor(private educationService: EducationsService, private workExperienceService: WorkExperiencesService) { }

  ngOnInit(): void {
    // this.educationService.getEducations().subscribe(educations => {
    //   this.educations = educations;
    //   console.log(this.educations)
    // }
    // );

    // this.workExperienceService.getWorkExperiences().subscribe(workExperiences => {
    //   this.workExperiences = workExperiences;
    // });
  }

  getActivities(education: Education): string {
    let activities = "";
    for (let i = 0; i < education.activities.length; i++) {
      activities += "• " + education.activities[i];
      activities += "\n";
    }
    return activities;
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
