import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appReact]'
})
export class ReactDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.color='red';
  }

  @HostBinding('style.backgroundColor') coloval = 'blue';
  @HostListener('mouseenter') mouse(){
    this.element.nativeElement.style.backgroundColor='green';
  }
  @HostListener('mouseleave') mouse2(){
    this.element.nativeElement.style.backgroundColor='yellow';
  }

}
