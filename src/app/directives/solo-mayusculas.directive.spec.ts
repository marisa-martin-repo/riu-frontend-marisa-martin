import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SoloMayusculasDirective } from './solo-mayusculas.directive';

// Componente falso para alojar la directiva
@Component({
  template: `<input [formControl]="control" soloMayusculas>`
})
class HostComponent {
  control = new FormControl('');
}

describe('SoloMayusculasDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloMayusculasDirective, HostComponent ],
      imports: [ ReactiveFormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería transformar el texto a mayúsculas', () => {
    const input = fixture.nativeElement.querySelector('input');
    
    input.value = 'hola';
    input.dispatchEvent(new Event('input'));    
    fixture.detectChanges();
    expect(component.control.value).toBe('HOLA');
  });
});