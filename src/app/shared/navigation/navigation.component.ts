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
  p2 = new Project("AHMINI", "11111111111111111111111 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["ah1.jpg", "Link 2"]);
  p3 = new Project("SavEat", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p4 = new Project("Shopy", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p8 = new Project("Boids Algorithm", "Boids Algo is Reactif project to simulate and mimmic the flocking behavior of birds. Each boid (green Thread) steers itself based on rules of avoidance, alignment, and coherence using GO Mutexes & Semaphores.", "completed", "Physics", new Date("2022-7-7"), new Date("2022-8-19"), "https://github.com/SamerBenMim/Boids-Algorithm-Visualization1", "Client 1", ["Golang"], ["boids1.jpg", "boids2.jpg","boids3.jpg","boids4.jpg"]);
  p5 = new Project("Ecommerce", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p9 = new Project("3D Solar System", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p6 = new Project("Friguia", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p7 = new Project("Proxym", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  p10 = new Project("Image Editor", "Description 1", "completed", "Category 1", new Date(), new Date(), "Location 1", "Client 1", ["Tech 1", "Tech 2"], ["Link 1", "Link 2"]);
  projects: Project[] = [this.p1,this.p2,this.p3,this.p4,this.p8,this.p10,this.p6,this.p7];

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
