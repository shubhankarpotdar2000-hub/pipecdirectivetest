import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[highlighter]'
})

export class Highlighter implements OnInit{

    firstcolor:string = 'pink'
constructor(
    private _elementRef : ElementRef,
    private _rendrer : Renderer2
){}

ngOnInit(): void {
    
}

@HostListener('mouseout')
mouseout(){
    this._rendrer.setStyle(this._elementRef.nativeElement,"background-color",this.firstcolor)
}

@HostListener('mouseover')
mouseIn(){
    this._rendrer.setStyle(this._elementRef.nativeElement,"background-color","orange")
    
}
}