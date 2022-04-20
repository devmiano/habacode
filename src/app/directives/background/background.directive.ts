import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('click') onClicks() {
    this.divDeco('#08415c');
  }
  @HostListener('dblclick') onDoubleClicks() {
    this.divDeco('#031b26');
  }
  private divDeco(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
