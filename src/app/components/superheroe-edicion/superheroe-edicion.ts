import { ChangeDetectionStrategy, Component, inject, model, ModelSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SuperHeroeInterface } from '../../interfaces/superheroe.interface';
import { SoloNumerosDirective } from "../../directives/solo-numeros.directive";
import { SoloMayusculasDirective } from "../../directives/solo-mayusculas.directive";
import { SUPERHEROE_VACIO } from '../../constants/superheroe.constants';

@Component({
  selector: 'app-superheroe-edicion',
  templateUrl: './superheroe-edicion.html',
  styleUrl: './superheroe-edicion.css',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, SoloNumerosDirective, SoloMayusculasDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SuperheroeEdicion {

  readonly dialogRespuesta = inject(MatDialogRef<SuperheroeEdicion>);
  readonly data = inject<SuperHeroeInterface>(MAT_DIALOG_DATA);
  readonly dataSuperheroe = model(this.data);
  public dataSuperheroeEditado: SuperHeroeInterface = SUPERHEROE_VACIO;
  edicionForm: FormGroup;

  constructor(private fb: FormBuilder) {    
    this.edicionForm = this.fb.group({
      id: [this.dataSuperheroe().id],
      nombre: [this.dataSuperheroe().nombre, [Validators.required, Validators.maxLength(20)]],
      descripcion: [this.dataSuperheroe().descripcion],
      contacto: [this.dataSuperheroe().contacto, [Validators.maxLength(10)]],
      superpoder: [this.dataSuperheroe().superpoder, Validators.maxLength(30)]
    });

    this.edicionForm.get('id')?.disable();
  }
  
  onNoClick(): void {
    this.dialogRespuesta.close();
  }

  onGuardar() {
      this.dataSuperheroeEditado.id = this.edicionForm.get('id')?.value;
      this.dataSuperheroeEditado.nombre = this.edicionForm.get('nombre')?.value;
      this.dataSuperheroeEditado.descripcion = this.edicionForm.get('descripcion')?.value;
      this.dataSuperheroeEditado.contacto = this.edicionForm.get('contacto')?.value;
      this.dataSuperheroeEditado.superpoder = this.edicionForm.get('superpoder')?.value;
  }
}

export { ReactiveFormsModule };

