import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
 template:`
    <footer class="desktop_footer">
<!--      <div class="container">-->
        <div class="row">
          <div class="col-lg-3">
            <div class="logo_wrap">
               <img src="/assets/header/sp_logo.png" alt="">
            </div>
          </div>

          <div class="col-lg-9 footer__menus-wrap" >
            <div class="row">
              <div class="col-lg-3 footer-tab">
                <div class="wrap">
                  <div class="title"><h3>About</h3>
                    <ul>
                      <li><a >Contact Us</a></li>
                      <li><a >Join Us</a></li>
                      <li><a >Why Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 footer-tab">
                <div class="wrap">
                  <div class="title"><h3>Courses</h3></div>
                  <ul>
                    <li><a >Career Seekers</a></li>
                    <li><a >Military Spouses</a></li>
                    <li><a >College Students</a></li>
                    <li><a >Remote Job Seekers</a></li>
                    <li><a >Trans & GNC</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 footer-tab">
                <div class="wrap">
                  <div class="title"><h3>Resources</h3>
                    <ul>
                      <li><a >Blog</a></li>
                      <li><a >Docuseries</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 footer-tab">
                <div class="wrap">
                  <div class="title"><h3>Let's Connect!</h3></div>
                  <ul class="icons">
                    <li><i class="fa-brands fa-linkedin"></i> &nbsp; LinkedIn</li>
                    <li><i class="fa-brands fa-youtube"></i> &nbsp; Youtube</li>
                    <li><i class="fa-brands fa-square-facebook"></i>&nbsp;FaceBook</li>
                    <li><i class="fa-brands fa-instagram"></i>&nbsp; Instagram</li>
                    <li><i class="fa-brands fa-tiktok"></i>&nbsp; TickTok</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
<!--      </div>-->

    </footer>

<!--    mobile-footer-->
    <footer class="mobile_footer">
      <div class="row">
        <div class="col-sm-6">
          <img class="mobile-logo" src="/assets/header/sp_logo.png" alt="">
        </div>
        <div class="col-sm-6">
          <div class="mobile-footer-tab">



            <ng-container  *ngFor="let content of footerContents; let i = index">
              <a (click)="expandSubMenu(i)" #title class="title">{{content.title}} &nbsp;<i class="fa-solid fa-caret-down"></i></a>

              <ul class="dropdown">
                <li *ngFor="let subMenu of content.sub">{{subMenu}}</li>
              </ul>

            </ng-container>

          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="icon-wrap">
        <ul class="icons flex justify-content-around">
          <li><i class="fa-brands fa-linkedin"></i> &nbsp; <span>LinkedIn</span></li>
          <li><i class="fa-brands fa-youtube"></i> &nbsp; <span>Youtube</span></li>
          <li><i class="fa-brands fa-square-facebook"></i>&nbsp;<span>FaceBook</span></li>
          <li><i class="fa-brands fa-instagram"></i>&nbsp;<span>Instagram</span></li>
          <li><i class="fa-brands fa-tiktok"></i>&nbsp; <span>TickTok</span></li>
        </ul>
      </div>

    </footer>
    <!--    mobile-footer:end-->
 `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerContents:any[] =[
    {title: 'About',
      sub:['Contact Us', 'Join Us', 'Why Us'],
    },
    {
      title: 'Courses',
      sub: ['Career Seekers','Military Spouses','College Students','Remote Job Seekers','Trans & GNC' ]
    },
    {
      title: 'Resources',
      sub:['Blog','Docuseries']
    }
    ];
  //
    @ViewChildren('title') titles!:QueryList<ElementRef>;


  constructor(private renderer:Renderer2) {
  }

  expandSubMenu(i:number){
    console.log(this.titles.toArray()[i].nativeElement.nextElementSibling);
    const target = this.titles.toArray()[i].nativeElement.nextElementSibling;

    if(!target.classList.contains('active')){
      this.renderer.addClass(target, 'active');

      //

    }else{
      this.renderer.removeClass(target, 'active');
    }



  }
}
