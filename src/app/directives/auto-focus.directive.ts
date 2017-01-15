import {Directive, OnInit, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector: '[swatAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngOnInit(): void {
    this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }
}
