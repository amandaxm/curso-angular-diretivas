import { Directive, HostListener,HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
  //  this._renderer.setStyle(this._element.nativeElement,'background-color','yellow');
    this.backgroundColor="yellow";
};
  @HostListener('mouseleave') onMouseLeave(){
   // this._renderer.setStyle(this._element.nativeElement,'background-color','white');
   this.backgroundColor="white";
  };

  constructor(//private _element: ElementRef,
   // private _renderer: Renderer2
    ) { }

    @HostBinding('style.backgroundColor') backgroundColor: string;

    /* @HostBinding('style.backgroundColor') get setColor(){
      codigo extra
      return this.backgroundColor;
    }
    private backgroundColor: string;
 */
  }

