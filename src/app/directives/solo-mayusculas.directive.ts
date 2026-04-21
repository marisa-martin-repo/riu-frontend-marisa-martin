import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[soloMayusculas]',
  standalone: true,
})
export class SoloMayusculasDirective {
   constructor(private control: NgControl) {}

  @HostListener('input', ['$any($event.target).value'])
  onInput(value: string) {
    this.control.control?.setValue(value.toUpperCase(), { emitEvent: false });
  }
}
