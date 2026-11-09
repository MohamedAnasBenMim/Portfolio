import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-experience-summary',
  templateUrl: './experience-summary.component.html',
  styleUrls: ['./experience-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getExperienceYears(): number {
    return 2;
  }

  getCompletedProjectsCount(): number {
    return 7;
  }

  getCustomersCount(): number {
    return 500;
  }
}
