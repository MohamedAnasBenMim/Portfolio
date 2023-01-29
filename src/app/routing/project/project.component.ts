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
  

  p1 = new Project("CosmicExperience", "this is a website that provides information on upcoming astronomical events such as comet appearances,eclipses, and more. The site offers a calendar of events, as well as detailed descriptions and viewing tips for each event. Users can also sign up for email notifications of upcoming events, and can even create their personalized calendar of events", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["cosmicexperience2.png", "cosmicexperience2.png"]);
  p2 = new Project("AHMINI", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p3 = new Project("SavEat", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p4 = new Project("Shopy", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p8 = new Project("Boids Algo", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p9 = new Project("3D Solar System", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p6 = new Project("Friguia", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p7 = new Project("Proxym", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p10 = new Project("Image Editor", `This image editor project is a web-based application that uses React as its frontend framework and GLSL (OpenGL Shading Language) to interact with the GPU to manipulate and edit images. The project provides the ability to adjust the contrast and exposure of images, and it provides a number of different filters to remove noise.
  The project also includes diagrams, statistics, and charts that provide information about the image being edited. By using GLSL and the GPU, the project is able to perform image processing tasks very quickly and efficiently.
  The user interface of the project is built with React, making it easy to use and navigate. The application provides an intuitive way to make adjustments to an image, and the diagrams, statistics, and charts help to provide a better understanding of the changes being made.
  Overall, this image editor project provides a powerful tool for editing and improving images, and it uses cutting-edge technologies like GLSL and React to deliver a high-performance and user-friendly experience.`, "completed", "Category 1", new Date("2022-12-1"), new Date("2022-12-25"), "Location 1", "Client 1", [ " GLSL ","ReactJs"], ["imageEditor1.jpg","imageEditor0.jpg", "imageEditor.jpg", "imageEditor2.jpg", "imageEditor3.jpg"]);
  projects: Project[] = [this.p1,this.p2,this.p3,this.p4,this.p8,this.p10,this.p5,this.p6,this.p7,this.p9];

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
