import { Component, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SoloNumerosDirective } from './solo-numeros.directive';

@Component({
  standalone: true,
  imports: [SoloNumerosDirective],
  template: `<input soloNumeros (valueChange)="onValueChange($event)">`
})

class TestHostComponent {
  lastValue: string = '';
  onValueChange(value: string) {
    this.lastValue = value;
  }
}

describe('SoloNumerosDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let inputEl: HTMLInputElement;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, SoloNumerosDirective] 
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    fixture.detectChanges();
  });

  it('debería eliminar caracteres no numéricos', () => {
    // Simulamos que el usuario escribe letras y números
    inputEl.value = '123abc45';
    inputEl.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    // El valor del input debe haberse limpiado
    expect(inputEl.value).toBe('12345');
  });

  it('debería emitir el valor limpio a través de valueChange', () => {
    inputEl.value = '45-67';
    inputEl.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    // Verificamos que el @Output emitió solo los números
    expect(hostComponent.lastValue).toBe('4567');
  });

  it('no debería modificar un valor que ya es solo números', () => {
    inputEl.value = '999';
    inputEl.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    expect(inputEl.value).toBe('999');
  });
});