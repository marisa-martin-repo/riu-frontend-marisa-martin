import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'input[soloNumeros]',
  standalone: true
})

export class SoloNumerosDirective {
   @Output() valueChange = new EventEmitter()

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
        const initalValue = this.elementRef.nativeElement.value;
        const newValue = initalValue.replace(/[^0-9]*/g, '');
        this.elementRef.nativeElement.value = newValue;
        this.valueChange.emit(newValue);
        if (initalValue !== this.elementRef.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
