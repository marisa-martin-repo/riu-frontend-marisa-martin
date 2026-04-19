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
import { SuperHeroe } from '../../interfaces/superheroe';
import { SoloNumeros } from "../../directives/solo-numeros";

@Component({
  selector: 'app-superheroe-edicion',
  templateUrl: './superheroe-edicion.html',
  styleUrl: './superheroe-edicion.css',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, SoloNumeros],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroeEdicion {

  readonly dialogRespuesta = inject(MatDialogRef<SuperheroeEdicion>);
  readonly data = inject<SuperHeroe>(MAT_DIALOG_DATA);
  readonly dataSuperheroe = model(this.data);
  public dataSuperheroeEditado: SuperHeroe = {id: 0, nombre: '', contacto: 0, descripcion: '', superpoder: ''};
  edicionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.edicionForm = this.fb.group({
      id: [this.dataSuperheroe().id],
      nombre: [this.dataSuperheroe().nombre, [Validators.required, Validators.maxLength(20)]],
      descripcion: [this.dataSuperheroe().descripcion],
      contacto: [this.dataSuperheroe().contacto, [Validators.maxLength(10)]],
      superpoder: [this.dataSuperheroe().superpoder, Validators.maxLength(30)]
    });
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

