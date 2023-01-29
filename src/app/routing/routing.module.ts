import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ContactComponent} from "./contact/contact.component";
import {HistoryComponent} from "./history/history.component";
import {EducationComponent} from "./education/education.component";
import {ProjectComponent} from "./project/project.component";
import {CertificateComponent} from "./certificate/certificate.component";
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: HistoryComponent },
  { path: 'education', component: EducationComponent },
  { path: 'achievements', component: CertificateComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects/:name', component: ProjectComponent }

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponents = [IndexComponent, ContactComponent, HistoryComponent, ProjectComponent, CertificateComponent,EducationComponent,SkillsComponent];
