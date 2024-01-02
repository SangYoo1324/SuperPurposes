import { Component } from '@angular/core';

@Component({
  selector: 'app-prize-list',
  template: `
    <div class="container">
      <div class="prize-list-wrap">

        <div class="prize-wrap">
          <div *ngFor="let prize of prizeDetailObj; let i=index" class="prize-title">
            <h2>{{prize.title}}</h2>

            <ul>
              <li *ngFor="let detail of prize.details">
                <p>{{detail}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './prize-list.component.css'
})
export class PrizeListComponent {


  prizeDetailObj :any[] =[
    {title: '1st Place Prize: Win The Ultimate Makeover ($10,000 Value)',
    details:[
      '(12) 1-Hour 1-On-1 Coaching Sessions',
      'Exclusive Access To Our 12-Week Career Changers Course',
      'Press Release to over 200 Digital Platforms',
      'We Will Showcase Your Achievements to Our 50,000+ Followers',
      'Featured Blog About YOU',
      'In-depth Industry Interview in Authority Magazine on Medium',
      'Professionally Produced YouTube Video Highlighting Your Career',
      'Ongoing Support in Our Private LinkedIn Community Group'
    ]
    },
    {title: '2nd Place Prize: The Vocational Voyager ($399 Value)',
    details:[
      '(12) 1-Hour 1-On-1 Coaching Sessions With Your Career Expert',
      'Exclusive Access To Our 12-Week Online Course For Career Changes',
      ]},
    {
      title: '3rd Place Prize: The Kickstarter\n' +
        '($299 Value)',
      details:['Exclusive Access To Our 12-Week Online Course For Career Changes']
    }
    ]
}
