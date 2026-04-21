import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormControlName } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SoloMayusculasDirective } from './solo-mayusculas.directive';

@Component({
  template: `<input soloMayusculas>`
})
class HostComponent {
  control = new FormControl('SUPERMAN');
}

describe('SoloMayusculasDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HostComponent, SoloMayusculasDirective ]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería transformar el texto a mayúsculas', () => {
    const input = fixture.nativeElement.querySelector('input');
    
    input.value = 'suPermAn';
    input.dispatchEvent(new Event('input'));    
    fixture.detectChanges();
    expect(component.control.value).toBe('SUPERMAN');
  });
});