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
  
  p1 = new Project("CosmicExperience", "this is a website that provides information on upcoming astronomical events such as comet appearances,eclipses, and more. The site offers a calendar of events, as well as detailed descriptions and viewing tips for each event. Users can also sign up for email notifications of upcoming events, and can even create their personalized calendar of events", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["cosmicexperience2.png", "cosmicexperience2.png", "cosmicexperience2.png", "cosmicexperience2.png", "cosmicexperience2.png", "cosmicexperience2.png"]);
  p2 = new Project("AHMINI", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p3 = new Project("SavEat", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p4 = new Project("Shopy", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p6 = new Project("Friguia", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p7 = new Project("Proxym", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  
  projects: Project[] = [this.p1];
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
}
