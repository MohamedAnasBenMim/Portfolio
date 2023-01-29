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

  p1 = new Project("CosmicExperience", "this is a website that provides information on upcoming astronomical events such as comet appearances,eclipses, and more. The site offers a calendar of events, as well as detailed descriptions and viewing tips for each event. Users can also sign up for email notifications of upcoming events, and can even create their personalized calendar of events", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["cosmicexperience2.png", "cosmicexperience1.png"]);
  p2 = new Project("AHMINI", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p3 = new Project("SavEat", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p4 = new Project("Shopy", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p8 = new Project("Boids Algo", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p9 = new Project("3D Solar System", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p6 = new Project("Friguia", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p7 = new Project("Proxym", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  ;
  p10 = new Project("Image Editor", `This image editor project is a web-based application that uses React as its frontend framework and GLSL (OpenGL Shading Language) to interact with the GPU to manipulate and edit images. The project provides the ability to adjust the contrast and exposure of images, and it provides a number of different filters to remove noise.
  The project also includes diagrams, statistics, and charts that provide information about the image being edited. By using GLSL and the GPU, the project is able to perform image processing tasks very quickly and efficiently.
  The user interface of the project is built with React, making it easy to use and navigate. The application provides an intuitive way to make adjustments to an image, and the diagrams, statistics, and charts help to provide a better understanding of the changes being made.
  Overall, this image editor project provides a powerful tool for editing and improving images, and it uses cutting-edge technologies like GLSL and React to deliver a high-performance and user-friendly experience.`, "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["imageEditor", "imageEditor1"]);  projects: Project[] = [this.p1,this.p2,this.p3,this.p4,this.p8,this.p10,this.p5,this.p6,this.p7,this.p9];

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
