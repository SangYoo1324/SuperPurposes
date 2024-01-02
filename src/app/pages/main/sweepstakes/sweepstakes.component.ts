import { Component } from '@angular/core';
import {SectionTitleComponent} from "../../../common/section-title/section-title.component";
import {PrizeListComponent} from "./prize-list/prize-list.component";

@Component({
  selector: 'app-sweepstakes',
  template: `
<section #sweepstakes>

  <app-section-title
    [title]="'Luck Is\’t Found, It\’s Made!'"
    [subTitle]="'What prizes could you win? We\’re happy you asked!'"
  ></app-section-title>
  <div class="intro container">
    <p>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Our “Win The Ultimate Career Makeover” sweepstakes is for anyone who is looking to get that extra “umph” and support to make the change they want to see in their career,
      and their life! The winners will receive a prize filled with expertise, opportunity and so much more. Think of us as a career-changing genie who can help you achieve your professional wishes – but instead of three wishes, there will be THREE WINNERS!

    </p>
  </div>

  <div class="special-container">

    <div class="wrap row ">
      <div class="col-lg-6 ">
        <img  [src]="'assets/sweepstakes/sweepstakes_form.png'" alt="">
      </div>
      <div class="col-lg-6 right ">
        <form>
          <h2>Enter Now to Get the Chance!</h2>
          <div class="name-wrap">

            <div class="input-group">
              <span class="input-group-text">Full Name</span>
              <input type="text" aria-label="First name" class="form-control" placeholder="First Name">
              <input type="text" aria-label="Last name" class="form-control" placeholder="Last Name">
            </div>


          </div>
          <div class="email-wrap">
            <div class="mb-3">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Email</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>
              <div class="form-text" id="basic-addon4">Confirmation mail will be sent *</div>
            </div>
          </div>

          <div class="phone-wrap">
            <select class="form-select" aria-label="Default select example">
              <option selected>+1(US)</option>
              <option value="1">+1(US)</option>
              <option value="2">+2(EX)</option>
              <option value="3">+3(EX)</option>
            </select>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number">
          </div>


          <div class="consent-form">
            <p class="exp"> Participation in this Sweepstakes is subject to the <b>Terms and Conditions</b>*</p>
<!--            checkbox-->
            <small>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  I have read and agree to the Terms and Conditions.
                </label>
              </div>
             </small>

            <p class="exp">Age Requirement</p>
<!--            checkbox-->
            <small>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                I certify that I am 21 years old or older
              </label>
            </div>
            </small>


          </div>
          <button class="submit-btn"  type="submit">SUBMIT</button>
        </form>
      </div>
    </div>

  </div>
  <app-prize-list></app-prize-list>
  <app-success-stories></app-success-stories>
</section>

  `,
  styleUrl: './sweepstakes.component.css'
})
export class SweepstakesComponent {


}
