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
      title: 'Cello Player',
      description:'The cello is my passion. Its rich, warm tone speaks to my soul and resonates with my emotions. Playing the cello is both challenging and fulfilling, as I am constantly pushing myself to improve and master new techniques. The versatility of the cello, its ability to play both melodic and harmonic roles, inspires me to explore a wide range of music and constantly grow as a musician. The cello is more than just an instrument, it is a way for me to express myself and connect with others through the beauty of music.'
    }];
  }


}

interface Card {
  title: string;
  description: string;
}
