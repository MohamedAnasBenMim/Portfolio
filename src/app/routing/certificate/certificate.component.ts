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

  c1 =  new Certificate("TELESCOPE FOR COMPETITION ALL WINNER", "International Astronomical Union | IAU", "I am proud to have won the 'Telescope for All' competition organized by the International Astronomical Union. The prize for the competition was a Bresser 90/900 telescope with all the necessary equipment, including cameras and filters. This telescope was particularly special as it was signed by astronauts and Nobel Prize laureates. This achievement showcases my passion and dedication towards Astronomy and the recognition from such reputable organization and personalities is a great honor for me. It also highlights my ability to succeed in competitive environments.", new Date("2021-5-2"), new Date("2021-7-2"), "Links", "https://www.iau.org/");
  c2 =  new Certificate("winter-cup 2022 ", "ACM INSAT", "I am pleased to have placed 4th during the competitive programming winter-cup organized by ACM. I was able to achieve this by solving 8 problems during the competition.", new Date("2022-2-2"), new Date("2022-2-2"), "Links", "https://www.acm.org/");
  c3 =  new Certificate("I-Techrity Hackathon. ", "I watch", "My team, hmlndr, recently took second place in the I-Techrity Hackathon. We developed an innovative invoice platform that utilizes private blockchain technology, specifically Hyperledger Fabric, to manage and create digital invoices between businesses.Not only did we gain valuable technical experience, but we also had the opportunity to apply business and strategic analysis concepts, as well as learn about Tunisian financial laws. The guidance and mentorship provided by the hackathon organizers was invaluable in our success.Participating in this event was a truly rewarding experience for our team, and we are thrilled to have placed second. However, the skills and knowledge we gained throughout the weekend are truly priceless.", new Date("2023-1-25"), new Date("2023-1-27"), "Links", " https://www.iwatch.tn/");
  certificates: Certificate[] =[this.c3, this.c2, this.c1];

  constructor(certificateService: CertificatesService) {
    this.certificateService = certificateService;
  }

  ngOnInit(): void {
      // this.certificateService.getCertificates().subscribe((certs) => {
      //   this.certificates = certs;
      // });
  }

}
