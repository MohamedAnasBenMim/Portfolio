import {Component, OnInit} from '@angular/core';
import {CertificatesService} from "../../services/certificates/certificates.service";
import Certificate from "../../models/Certificate";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  private certificateService: CertificatesService
  // constructor(name: string, organization: string, description: string, issuedDate: Date, expiryDate: Date, credentialId: string, url: string) {

  c1 =  new Certificate("National Cultural Competition – Music Category (Instrumental Performance)", "Ministry of Education", "I am proud to have been recognized among the top winners in the national remote cultural competitions \"Me and COVID\", organized by the Ministry of Education. I was awarded 2nd place in the Solo Instrumental Performance Competition at the institute level. This achievement reflects my passion for music and my ability to express creativity through instrumental performance in a competitive environment. Participating in this national-level event allowed me to develop my artistic skills, discipline, and stage confidence, while competing with talented students from different institutions. Being acknowledged in such an official competition is a meaningful milestone that highlights both my dedication to music and my versatility beyond technical fields.", new Date("2021-1-1"), new Date("2021-1-1"), "Links", "https://education.gov.tn/?lang=fr");
  c2 =  new Certificate("TCPC 2026 – The Tunisian Collegiate Programming Contest", "", "I participated in TCPC 2026, a highly competitive programming contest bringing together over 100 teams, 300 participants, and representatives from 21 schools. Our team secured 22nd place by successfully solving 6 out of 10 problems during the competition. This experience strengthened our algorithmic thinking, problem-solving skills, and ability to perform under time pressure in a challenging and collaborative environment.", new Date("2026-3-1"), new Date("2026-3-1"), "/assets/tcpc-certificate-2027.pdf", "https://icpc.global/regionals/finder/TCPC");
  c3 =  new Certificate("WIEMPOWER 2.0 Hackathon – IEEE WIE SupCom Affinity Group", "2025", "With our team ER7I, we secured 3rd place at WIEMPOWER 2.0 by developing a smart farming solution that leverages IoT, Artificial Intelligence, Edge, and Cloud technologies to optimize agricultural decision-making. Our system collects real-time environmental data through IoT sensors and processes it using AI models to provide intelligent insights for efficient resource management. This experience allowed us to strengthen our skills in system design, teamwork, and rapid prototyping within a 24-hour hackathon environment, while collaborating in a highly innovative and competitive setting.", new Date("2025-11-1"), new Date("2025-11-1"), "Links", "https://events.vtools.ieee.org/m/513934");
  certificates: Certificate[] =[this.c2, this.c3, this.c1];

  constructor(certificateService: CertificatesService) {
    this.certificateService = certificateService;
  }

  ngOnInit(): void {
      // this.certificateService.getCertificates().subscribe((certs) => {
      //   this.certificates = certs;
      // });
  }

}
