import { Component } from '@angular/core';

@Component({
  selector: 'app-career-seekers',
  template:`
    <div class="dummy">

      <p class="construction">This page is now on Construction</p>
    </div>
    <app-footer></app-footer>
    <style>
      .construction{
        padding: 10rem;
      }
      .dummy{
        height: 100vh;
      }
    </style>
  `,
  styleUrl: './career-seekers.component.css'
})
export class CareerSeekersComponent {

}
