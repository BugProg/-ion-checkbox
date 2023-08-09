import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SwiperOptions} from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiperEl', { static: true }) swiperEl: ElementRef | undefined;
  items = [
    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },    {
      label: 'test1',
    },    {
      label: 'test2',
    },    {
      label: 'test3',
    },    {
      label: 'test4',
    },    {
      label: 'test5',
    },    {
      label: 'test6',
    },

  ]

  // ngAfterViewInit() {
  //   const swiperParams: SwiperOptions = {
  //     initialSlide: 1,
  //   };
  //   Object.assign(this.swiperEl?.nativeElement, swiperParams);
  //   this.swiperEl?.nativeElement.initialize();
  // }
}
