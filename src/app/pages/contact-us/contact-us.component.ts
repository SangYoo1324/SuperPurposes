import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
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
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
