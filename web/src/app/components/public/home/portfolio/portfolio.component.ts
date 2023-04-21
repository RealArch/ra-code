import { Component, ElementRef, ViewChild } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Clients } from 'src/app/intefaces/clients';
import { GeneralService } from 'src/app/services/general/general.service';
import Swiper, { SwiperOptions } from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @ViewChild('portfolioSwiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  //portfolioSwiper 
  swiperParams: SwiperOptions = {
    loop: false,
    slidesPerView: 2,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },

  };
  loading: boolean = true;
  clients: Clients[];
  constructor(
    private generalApi: GeneralService
  ) {

  }
  ngOnInit() {
    this.getClients()
  }
  getClients() {
    this.loading = true;
    this.generalApi.getClients()
      .subscribe({
        next: (data) => {
          this.clients = data as Clients[]
          console.log(data)
        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
          this.loading = false
        }
      })

  }
  goTo(link: string) {
    window.open(link, 'blank')
  }
  ngAfterViewInit(): void {
    register();
    Object.assign(this.swiperRef?.nativeElement, this.swiperParams);
    this.swiperRef?.nativeElement.initialize()
  }
}
