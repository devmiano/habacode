import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('hover') onClicks() {
    this.divDeco('aqua');
  }
  @HostListener('click') onDoubleClicks() {
    this.divDeco('black');
  }
  @HostListener('window:keydown.enter') onEnter() {
    this.divDeco('black');
  }
  private divDeco(action: string) {
    setTimeout(() => {
      this.elem.nativeElement.style.backgroundColor = action;
    }, 3000);
  }
}
