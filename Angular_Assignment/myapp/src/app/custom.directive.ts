import { ElementRef, Directive, HostBinding, Host, HostListener } from '@angular/core';

@Directive({
selector : '[custDir]',
})
export class CustomDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    @HostBinding('style.color') colName = 'green';
    @HostListener('mouseenter') m1() {
        this.el.nativeElement.style.backgroundColor = 'red';
    }
    @HostListener('mouseleave') m2() {
        this.el.nativeElement.style.backgroundColor = 'green';
    }
}
