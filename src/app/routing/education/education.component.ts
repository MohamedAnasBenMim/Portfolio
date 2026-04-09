import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EducationsService } from "../../services/educations/educations.service";
import Education from "../../models/Education";
import WorkExperience from "../../models/WorkExperience";
import { WorkExperiencesService } from "../../services/work-experience/work-experiences.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {
  ed1: Education = new Education(
    `
   ENSI – National School of Computer Science `,
    "Software Engineering Cycle",
    "Computer Science",
    false,
    new Date("2024-09-01"),
    new Date("2027-7-01"),
    "France",
    [
"I am currently pursuing my Software Engineering studies at the National School of Computer Science (ENSI). I am expected to graduate in 2027 with a degree in Software Engineering, building a strong foundation in computer science, software development, and system design through both academic and practical experiences."
    ],
    [
      "a",
      "b"
    ]
                                                                                                                                                                          
  );
  ed2: Education = new Education(
    "Preparatory Institute for Engineering Studies of Nabeul (IPEIN)",
    "Pre-Engineering Cycle",
    "Computer Science",
    false,
    new Date("2022-09-01"),
    new Date("2024-07-01"),
    "France",
    [
      "Completed a rigorous pre-engineering program with a strong foundation in mathematics, physics, and computer science. Ranked 274th out of 1750 in the national entrance exam (Math-Physics track). Developed strong analytical thinking, discipline, and the ability to handle intensive academic workloads in a highly competitive environment."
    ],
    [
      "a",
      "b"
    ]

  );
  ed3: Education = new Education(
    "LYCEE ENFIDHA 1",
    "Baccalaureate in Mathematics",
    "Computer Science",
    false,
    new Date("2021-09-01"),
    new Date("2022-07-01"),
    "France",
    [
      "Achieving the National diploma Baccalaureat in MATHEMATICS with honors and exceptional distinction, earning a grade of 15 out of 20, is a source of immense pride for me "
    ],
    [
      "a",
      "b"
    ]

  );




  educations: Education[] = [this.ed1, this.ed2, this.ed3];

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
