import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appType]'
})
export class TypeDirective {

  constructor(private el: ElementRef ) { }
  // @Input('appType') highlightColor: string;
  @Input('appType')
  set abProductsOutOfStock(tipo: string) {
    if('aqui' ) {

    }

  }

}
