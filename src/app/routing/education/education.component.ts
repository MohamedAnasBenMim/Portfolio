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
   INSAT `,
    "Software Engineering Cycle",
    "Computer Science",
    false,
    new Date("2021-09-01"),
    new Date("2024-7-01"),
    "France",
    [
"I am currently pursuing my 4th year of Software Engineering studies at the National Institute of Applied Science and Technology. I am projected to graduate from INSAT with a degree in Software Engineering in 2024, completing my studies with a solid foundation of knowledge and experience in the field."
    ],
    [
      "a",
      "b"
    ]
                                                                                                                                                                          
  );
  ed2: Education = new Education(
    "INSAT",
    "Pre-Engineering Cycle",
    "Computer Science",
    false,
    new Date("2019-09-01"),
    new Date("2021-07-01"),
    "France",
    [
      "I am proud to have successfully completed my 2-year pre-engineering cycle  at the national institute of applied science and technology with distinction, standing out as one of the top-performing students in my graduating cohort."
    ],
    [
      "a",
      "b"
    ]

  );
  ed3: Education = new Education(
    "LYCEE ENFIDHA 2",
    "Baccalaureate in Mathematics",
    "Computer Science",
    true,
    new Date("2015-11-01"),
    new Date("2019-07-01"),
    "France",
    [
      "Achieving the National diploma Baccalaureat in MATHEMATICS with high honors and exceptional distinction, earning a grade of 17 out of 20, is a source of immense pride for me "
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
