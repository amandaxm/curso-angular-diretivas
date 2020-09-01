import { Directive,HostListener,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //  this._renderer.setStyle(this._element.nativeElement,'background-color','yellow');
      this.backgroundColor=this.highlightColor;
  };
    @HostListener('mouseleave') onMouseLeave(){
     // this._renderer.setStyle(this._element.nativeElement,'background-color','white');
     this.backgroundColor=this.defaultColor;
    };
  constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string='white';
  @Input('highlight') highlightColor: string='yellow';

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
}
