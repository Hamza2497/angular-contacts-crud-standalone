import { Directive, ElementRef, HostListener, Input, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string = '#e3f2fd'; // very light blue

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor');
  }
}
