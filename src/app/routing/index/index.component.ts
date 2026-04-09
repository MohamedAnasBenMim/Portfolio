import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCards(): Card[] {
    return [{
      title: 'Algorithms Enthusiast',
      description:"My passion for computer science and coding is deeply rooted in my mathematical background. The logical and analytical thinking skills I acquired through my studies in maths have proven to be invaluable in the field of computer science. They allow me to approach problem-solving with a clear and structured mindset, making it easier for me to find creative solutions to even the most complex challenges. My deep understanding of algorithms & data structures, has also been crucial in writing efficient and effective code. The challenge and satisfaction of solving complex problems through coding is something that I find particularly exciting and motivating, that's why I am passionate about Computer Science, it blends my love for mathematics and problem-solving with the thrill of bringing ideas to life through code."
    }, {
      title: 'Astronomy Lover',
      description:'My deep-seated interest for astronomy and space, combined with my background in software engineering, has led me to envision a future in which I can use my knowledge to push the boundaries of what is possible in this field. My understanding of programming and data analysis can be used to process and interpret large amounts of data from astronomical observations, helping to uncover new discoveries and insights. I am excited about the possibility of using my background to develop new technologies and tools for space exploration. I want to be part of a team that uses technology to advance our knowledge and understanding of the universe. The potential of technology to help us explore the unknown and discover the mysteries of the cosmos is what drives my passion for astronomy and my desire to bring my software engineering background to the field'
    }, {
      title: 'Guitar Player 🎸',
      description:'The guitar is my passion. Its rich, expressive sound speaks to my soul and reflects my emotions. Playing the guitar is both challenging and rewarding, as I constantly push myself to improve and master new techniques. The versatility of the guitar, its ability to handle both rhythm and melody, inspires me to explore different styles of music and grow as a musician. The guitar is more than just an instrument—it’s a way for me to express myself and connect with others through the power of music.'
    }];
  }


}

interface Card {
  title: string;
  description: string;
}
