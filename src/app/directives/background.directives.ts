import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core"

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit{
  @Input('appBackground') hoverColor: string = 'lavender'
  @Input() defaultColor: string = 'transparent'
  
  @HostBinding('style.backgroundColor') background!: string;
  
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.background = this.defaultColor;
  }
  @HostListener('mouseleave', ['$event']) mouseLeave() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter', ['$event']) mouseEnter() {
    const {nativeElement} = this.element
    this.background = this.hoverColor;
    this.renderer.addClass(nativeElement, 'whiteText')
  }
}