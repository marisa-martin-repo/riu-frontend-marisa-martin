import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SuperHeroe } from '../../interfaces/superheroe';

@Component({
  selector: 'app-superheroe-edicion',
  templateUrl: './superheroe-edicion.html',
  styleUrl: './superheroe-edicion.css',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroeEdicion {

  readonly dialogRespuesta = inject(MatDialogRef<SuperheroeEdicion>);
  readonly data = inject<SuperHeroe>(MAT_DIALOG_DATA);
  readonly dataSuperheroe = model(this.data);

  onNoClick(): void {
    this.dialogRespuesta.close();
  }
}
