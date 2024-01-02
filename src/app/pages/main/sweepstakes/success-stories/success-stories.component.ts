import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  template:`
    <div class="container sucesss-story-wrap">
      <blockquote class="otro-blockquote">
        "You are only as successful as you believe you can be"
        <span><small>Mary R, Personal Specialist, California Department of Social Services</small></span>
      </blockquote>
      <iframe width="100%"  src="https://www.youtube.com/embed/F6FjnKMlK1M" title="From Insecure to Incredible! | Career Success Story" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div class="testimonial-box">
        <p>&nbsp;&nbsp;&nbsp;Mary is a 50-year old career changer and the winner of last year’s Ultimate Career Makeover Sweepstakes.</p>
        <p>&nbsp;&nbsp;&nbsp;Struggling with listlessness and dissatisfaction in her career, she felt trapped, unable to progress despite her many qualifications. Mary admitted, “I stayed ten years too long because of my lack of confidence.” Ready for change, she took a chance and entered our Career Makeover Sweepstakes.</p>
        <p>&nbsp;&nbsp;&nbsp;Watch Mary learn to embrace opportunity and pursue her purpose-filled profession.</p>
      </div>

    </div>

    <div class="container super-success-stories">
      <app-section-title
      [title]="'Success Stories'"
      [subTitle]="'Check some Testimonials of Supper Success Stories!'"
      ></app-section-title>
        <div class="row">
          <div class="col-lg-4">
                <img src="/assets/sweepstakes/successStories/card_1png.png" alt="">
          </div>
          <div class="col-lg-4">
            <img src="/assets/sweepstakes/successStories/card_2png.png" alt="">
          </div>
          <div class="col-lg-4">
            <img src="/assets/sweepstakes/successStories/card_3png.png" alt="">
          </div>
        </div>
    </div>

  `,
  styleUrl: './success-stories.component.css'
})
export class SuccessStoriesComponent {

}
