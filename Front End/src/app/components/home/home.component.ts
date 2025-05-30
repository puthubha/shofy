import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductData, SignUpdata } from '../interface';
import { Router } from '@angular/router';
import { LoginSessionService } from '../services/login-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  productApiData: ProductData[] = [];
  braceletData: ProductData[] = [];
  earringData: ProductData[] = [];
  necklaceData: ProductData[] = [];
  p: number = 1;
  count: number = 8;
  activeIndex: number = 0;
  screenWidth: number = window.innerWidth;

  constructor(
    private ProductService: ProductServiceService,
    private Router: Router,
    private LoginSession: LoginSessionService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  ngOnInit(): void {
    // this.ProductService.getProductData().subscribe((data: ProductData[]) => {
    //   this.productApiData = data;
    // this.braceletData = this.productApiData.filter(
    //   (b) => b.productCategorie === 'bracelets'
    // );
    // this.earringData = this.productApiData.filter(
    //   (c) => c.productCategorie === 'earrings'
    // );
    // this.necklaceData = this.productApiData.filter(
    //   (d) => d.productCategorie === 'necklaces'
    // );
    //   this.LoginSession.loginSession();
    // });
  }

  ngOnDestroy() {
    localStorage.removeItem('Token');
  }

  getSliderStyle(index: number): any {
    if (index === this.activeIndex) {
      return {
        width: `${this.screenWidth}px`,
        position: 'relative',
        left: `-${this.screenWidth * index}px`,
        top: '0px',
        zIndex: 999,
        opacity: 1,
      };
    } else {
      return {
        width: `${this.screenWidth}px`,
        position: 'relative',
        left: `-${this.screenWidth * index}px`,
        top: '0px',
        zIndex: 998,
        opacity: 0,
        transition: 'opacity 500ms',
      };
    }
  }
  // public get slickTrackStyle():any{
  //   return {
  //     opacity: 1,
  //     width: this.screenWidth + this.screenWidth * 3,
  //   };
  // }

  changeSlide(goToNext: boolean) {
    const slides = ['first', 'second', 'third', 'fourth'];
    let currentIndex = 0;
    let nextIndex = 0;
    if (goToNext) {
      currentIndex = this.activeIndex;
      nextIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = this.activeIndex;
      nextIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    }

    const currentSlide = document.getElementById(
      `${slides[currentIndex]}Slide`
    );
    const prevSlide = document.getElementById(`${slides[nextIndex]}Slide`);

    if (currentSlide && prevSlide) {
      // Update active index
      this.activeIndex = nextIndex;

      // Toggle classes for both slides
      const classesToToggle = ['slick-active', 'slick-current'];
      classesToToggle.forEach((className) => {
        currentSlide.classList.toggle(className);
        prevSlide.classList.toggle(className);
      });
    }
  }

  // slideNext() {
  //   const slides = ['first', 'second', 'third', 'fourth'];
  //   const currentIndex = this.activeIndex;
  //   const nextIndex = (currentIndex + 1) % slides.length;

  //   const prevSlide = document.getElementById(`${slides[currentIndex]}Slide`);
  //   const nextSlide = document.getElementById(`${slides[nextIndex]}Slide`);

  //   if (prevSlide && nextSlide) {
  //     // Update active index
  //     this.activeIndex = nextIndex;

  //     // Toggle classes for both slides
  //     const classesToToggle = ['slick-active', 'slick-current'];
  //     classesToToggle.forEach((className) => {
  //       prevSlide.classList.toggle(className);
  //       nextSlide.classList.toggle(className);
  //     });
  //   }
  // }
}
